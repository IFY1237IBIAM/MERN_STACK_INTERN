import React from "react";

const Hero = () => {
  return (
    <section className="bg-blue-500 text-white py-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Hello, I'm Ifegwu Ibiam Ifeanyi</h1>
        <p className="text-lg mb-6 text-black">I am a web developer specializing in MERN Stack applications.</p>
        <a href="https://intercore-cse340.onrender.com/" target="_blank" rel="noopener noreferrer">
          <button className="bg-black text-black-500 px-6 py-2 rounded-lg hover:bg-gray-200">
            Explore My Work
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;