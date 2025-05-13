import React, { useState } from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <section id="contact" className="py-16 bg-gray-800 text-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg mb-6">Feel free to get in touch with me.</p>
        <button
          className="bg-white text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-200"
          onClick={handleButtonClick}
        >
          Contact Form
        </button>
        {showForm && <ContactForm />}
      </div>
    </section>
  );
};

export default Contact;