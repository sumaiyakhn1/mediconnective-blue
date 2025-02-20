import React, { FormEvent, useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

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
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Get in Touch
          </h2>
          <p className="mt-4 text-gray-600">We'd love to hear from you. Send us a message!</p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-3xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h3>
            <form onSubmit={onSubmit} className="space-y-5">
              {['name', 'email', 'subject', 'message'].map((field, index) => (
                <motion.input
                  key={field}
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                  required={field !== 'subject'}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                />
              ))}
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-medium hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
            {result && <p className="text-center text-gray-600 mt-4">{result}</p>}
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            {[
              { icon: Mail, label: "Email", value: "amdglobalnet@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 9319311009" },
              { icon: Linkedin, label: "LinkedIn", value: "Coming soon" },
              { icon: Twitter, label: "Twitter", value: "Coming soon" }
            ].map((item, index) => (
              <motion.div 
                key={item.label} 
                className="flex items-center space-x-4 text-gray-700"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="bg-blue-100 p-3 rounded-full">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">{item.label}</p>
                  <p className="text-gray-500">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mt-16 bg-white p-4 rounded-3xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
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
        </motion.div>
      </div>
    </div>
  );
}