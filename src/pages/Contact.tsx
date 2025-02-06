

  import React, { FormEvent, useState } from "react";

export default function Contact() {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "dcc7be5a-9c78-4d83-99f0-88c389fe82b7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-6">
      <h2 className="text-4xl font-bold text-blue-800 mb-8">Contact</h2>
      <div className="grid md:grid-cols-2 gap-8 bg-white p-8 rounded-2xl shadow-lg w-full max-w-4xl">
        {/* Left Side - Contact Form */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-5">Get in Touch</h3>
          <form onSubmit={onSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
          <span className="text-blue-800 mt-4">{result}</span>
        </div>

        {/* Right Side - Contact Information */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Contact Information</h3>
          <div className="space-y-4 text-blue-900">
            <p>📧 asifwork76@gmail.com</p>
            <p>📞 +91 9215000721</p>
            <p>
              🔗{" "}
              <a href="#" className="text-blue-600 hover:underline">
                LinkedIn Profile
              </a>
            </p>
            <p>
              🐦{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Twitter Profile
              </a>
            </p>
          </div>
      
        </div>
  
      </div>

      <div className="w-full h-screen mt-20">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1586.4261574230688!2d79.1490037834908!3d29.460172856498613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a110d07692f2f%3A0xfa65822f8bd9b3d9!2sManu%20Maharani%20Resorts%20%26%20Spa!5e0!3m2!1sen!2sin!4v1738765688915!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-lg"
  ></iframe>
</div>

    </div>
  );
}