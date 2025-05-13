import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-600 py-4 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Ifegwu Ibiam Ifeanyi. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li>
            <a href="https://www.linkedin.com/in/ifeanyi-chukwu-ibiam/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/IFY1237IBIAM" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="mailto:ifegwuifeanyi2021@example.com">Contact Me</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
