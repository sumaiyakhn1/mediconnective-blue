
import React from 'react';
import { toast } from "sonner";

export default function RegistrationForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dcc7be5a-9c78-4d83-99f0-88c389fe82b7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        toast.success("Registration successful!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl p-8 space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              Kumaon Cancer Conclave 2025
            </h1>
            <h2 className="text-xl font-semibold text-gray-700">Registration Form</h2>
            <p className="text-gray-500">Please fill in your details to register for the conference</p>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="group">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="Enter your email"
                />
              </div>

              <div className="group">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="group">
                <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-1">Current Designation</label>
                <input 
                  type="text" 
                  id="designation" 
                  name="designation" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="Enter your designation"
                />
              </div>

              <div className="group">
                <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
                <select 
                  id="institution" 
                  name="institution" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 outline-none bg-white"
                >
                  <option value="">Select Institution</option>
                  <option value="Institution1">Institution 1</option>
                  <option value="Institution2">Institution 2</option>
                  <option value="Institution3">Institution 3</option>
                </select>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 px-6 rounded-xl font-medium hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Submit Registration
            </button>
          </form>

          {result && (
            <div className="text-center">
              <p className="text-sm text-gray-600">{result}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
