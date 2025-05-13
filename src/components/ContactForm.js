import React from "react";

const ContactForm = () => {
  return (
    <div className="mt-8">
      <form>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 mb-4 border border-gray-400 text-black"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border border-gray-400 text-black"
        />
        <textarea
          placeholder="Message"
          className="w-full p-2 mb-4 border border-gray-400 text-black"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-800">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;