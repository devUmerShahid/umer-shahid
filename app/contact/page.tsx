"use client"; // Yeh line zaroori hai kyunki form mein state aur events use kar rahe hain (client-side)

import { useState } from "react";

export default function Contact() {
  // Form ke data ko store karne ke liye state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Success ya error message dikhane ke liye

  // Jab user type kare to state update ho
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form submit hone pe
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Page reload na ho

    // Abhi simple alert dikha rahe hain (baad mein Firebase ya email connect karenge)
    alert(`Thanks ${formData.name}! Your message has been sent. I'll reply soon!`);

    // Optional: Console mein data dekh lo testing ke liye
    console.log("Form Submitted:", formData);

    // Form clear kar do
    setFormData({ name: "", email: "", message: "" });
    setStatus("Message sent successfully! 🎉");
  };

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 text-center mb-8">
          Get in Touch
        </h1>

        <p className="text-lg text-gray-700 text-center mb-12">
          Have a question or want to collaborate? Drop me a message below!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>

          {/* Status Message */}
          {status && (
            <p className="mt-4 text-center text-green-600 font-medium">{status}</p>
          )}
        </form>
      </div>
    </main>
  );
}