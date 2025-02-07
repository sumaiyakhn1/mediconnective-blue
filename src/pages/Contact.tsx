
import React, { FormEvent, useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, Globe, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "dcc7be5a-9c78-4d83-99f0-88c389fe82b7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        toast.success("Message sent successfully!");
        event.currentTarget.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Get in Touch
          </h2>
          <p className="mt-4 text-gray-600">We'd love to hear from you. Send us a message!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-3xl shadow-2xl">
          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h3>
            <form onSubmit={onSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-medium hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
            {result && <p className="text-center text-gray-600 mt-4">{result}</p>}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-gray-700">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-500">asifwork76@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-gray-700">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-500">+91 9215000721</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-gray-700">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <a href="#" className="text-blue-600 hover:underline">Connect with us</a>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-gray-700">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Twitter className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Twitter</p>
                  <a href="#" className="text-blue-600 hover:underline">Follow us</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white p-4 rounded-3xl shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1586.4261574230688!2d79.1490037834908!3d29.460172856498613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a110d07692f2f%3A0xfa65822f8bd9b3d9!2sManu%20Maharani%20Resorts%20%26%20Spa!5e0!3m2!1sen!2sin!4v1738765688915!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
