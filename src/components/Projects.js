import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Projects</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Project 1</h3>
          <p className="text-gray-600">A Vehicle development project.</p>
          <a
            href="https://github.com/IFY1237IBIAM/cse340.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            View on GitHub
          </a>
        </div>
        {/* Project 2*/}
         <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Project 2</h3>
          <p className="text-gray-600">Building an APP with C# (C sharp)</p>
          <a
            href="https://github.com/IFY1237IBIAM/cse212-projects.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            View on GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
