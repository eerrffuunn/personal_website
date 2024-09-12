import React, { useState } from 'react';

const ContactForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { name, email, message });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white bg-opacity-20 p-8 rounded-2xl shadow-lg max-w-md w-full backdrop-filter backdrop-blur-lg border border-white border-opacity-20">
        <h2 className="text-3xl font-bold mb-6 text-white">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 bg-white bg-opacity-10 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 bg-white bg-opacity-10 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="4"
              className="w-full px-3 py-2 bg-white bg-opacity-10 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-accent text-white rounded-md hover:bg-opacity-80 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;