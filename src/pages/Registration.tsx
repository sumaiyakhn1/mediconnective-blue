import React from 'react';

export default function RegistrationForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dcc7be5a-9c78-4d83-99f0-88c389fe82b7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
      <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Kumaon Cancer Conclave 2025</h1>
      <h2 className="text-xl font-semibold text-center mb-4">Registration Form</h2>
      <p className="text-center mb-6">Please fill in your details to register for the conference</p>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name:</label>
          <input type="text" id="fullName" name="fullName" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address:</label>
          <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>

        <div>
          <label htmlFor="designation" className="block text-sm font-medium text-gray-700">Current Designation:</label>
          <input type="text" id="designation" name="designation" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>

        <div>
          <label htmlFor="institution" className="block text-sm font-medium text-gray-700">Institution:</label>
          <select id="institution" name="institution" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Select Institution</option>
            <option value="Institution1">Institution 1</option>
            <option value="Institution2">Institution 2</option>
            <option value="Institution3">Institution 3</option>
            {/* Add more institutions as needed */}
          </select>
        </div>

        <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Submit Form
        </button>
      </form>

      {result && <p className="mt-4 text-center text-sm text-gray-600">{result}</p>}
    </div>
  );
}