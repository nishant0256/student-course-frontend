import React from 'react';
import { Link } from "react-router-dom";
import web from "../Image/web-dev.png";

export default function WebDevelopment() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <Link to="/" className="inline-block mb-6 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">Back to Home</Link>
      <div className="max-w-6xl mx-auto text-center">
        <img src={web} alt="Web Development" className="h-32 w-32 mx-auto mb-6 rounded-lg" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Web Development Course</h1>
        <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-600">
          Master front-end and back-end technologies to create dynamic websites. This course includes HTML, CSS, JavaScript, React, Node.js, and more.
        </p>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">Course Overview</h2>
          <p className="text-gray-600 mb-6">
            Our Web Development course is designed to equip you with the skills needed to create modern, responsive, and interactive websites. From front-end design to back-end functionality, you'll learn to build full-stack web applications using industry-standard technologies and best practices.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">What You'll Learn</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>HTML5 and CSS3 for structuring and styling web pages</li>
            <li>JavaScript and ES6+ for interactive functionality</li>
            <li>React.js for building dynamic user interfaces</li>
            <li>Node.js and Express.js for server-side development</li>
            <li>MongoDB for database management</li>
            <li>RESTful API design and implementation</li>
            <li>Responsive design with CSS frameworks like Tailwind CSS</li>
            <li>Version control with Git and GitHub</li>
            <li>Deployment and hosting on platforms like Vercel, Netlify, and Heroku</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Course Curriculum</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 1: Front-End Fundamentals</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• HTML5 Structure and Semantics</li>
                <li>• CSS3 Styling and Layout</li>
                <li>• Responsive Design Principles</li>
                <li>• CSS Frameworks (Bootstrap, Tailwind)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 2: JavaScript & React</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• JavaScript Fundamentals</li>
                <li>• DOM Manipulation</li>
                <li>• React Components and Props</li>
                <li>• State Management with Hooks</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 3: Back-End Development</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Node.js and Express.js</li>
                <li>• RESTful API Development</li>
                <li>• Authentication and Security</li>
                <li>• Database Integration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 4: Full-Stack Projects</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• E-commerce Website</li>
                <li>• Social Media Platform</li>
                <li>• Blog CMS</li>
                <li>• Portfolio Website</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Prerequisites</h3>
          <p className="text-gray-600 mb-6">
            Basic computer skills and familiarity with using a web browser. No prior programming experience required, though basic HTML knowledge is helpful.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Career Opportunities</h3>
          <p className="text-gray-600 mb-6">
            Web developers are in high demand across all industries. Graduates can work as front-end developers, back-end developers, full-stack developers, UI/UX developers, and web application developers. Opportunities exist in tech companies, startups, agencies, and freelance work.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Why Choose This Course?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Learn both front-end and back-end technologies</li>
            <li>Build real-world projects from scratch</li>
            <li>Industry-relevant skills and modern frameworks</li>
            <li>Portfolio development for job applications</li>
            <li>Mentorship and code reviews</li>
            <li>Job placement assistance and interview preparation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
