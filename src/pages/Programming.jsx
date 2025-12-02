import React from 'react';
import { Link } from "react-router-dom";
import prog from "../Image/OIP.jpg";

export default function Programming() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <Link to="/" className="inline-block mb-6 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">Back to Home</Link>
      <div className="max-w-6xl mx-auto text-center">
        <img src={prog} alt="Programming" className="h-32 w-32 mx-auto mb-6 rounded-lg" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Programming Course</h1>
        <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-600">
          Learn languages like Python, Java, and JavaScript to build robust applications. Covers fundamentals, algorithms, and best practices.
        </p>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">Course Overview</h2>
          <p className="text-gray-600 mb-6">
            Our Programming course is designed to take you from a complete beginner to a confident programmer capable of building robust applications. Whether you're interested in web development, data analysis, automation, or software engineering, this course provides a solid foundation in multiple programming languages and paradigms.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">What You'll Learn</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Fundamentals of programming: variables, data types, control structures, and functions</li>
            <li>Object-oriented programming concepts and design patterns</li>
            <li>Python programming for general-purpose applications and scripting</li>
            <li>Java programming for enterprise-level applications</li>
            <li>JavaScript for web development and interactive applications</li>
            <li>Algorithm design and problem-solving techniques</li>
            <li>Debugging and testing methodologies</li>
            <li>Version control with Git</li>
            <li>Best practices for writing clean, maintainable code</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Course Curriculum</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 1: Programming Fundamentals</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Introduction to Programming</li>
                <li>• Variables and Data Types</li>
                <li>• Operators and Expressions</li>
                <li>• Control Structures</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 2: Python Programming</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Python Basics</li>
                <li>• Data Structures</li>
                <li>• Functions and Modules</li>
                <li>• File Handling</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 3: Java Programming</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Java Fundamentals</li>
                <li>• Object-Oriented Programming</li>
                <li>• Exception Handling</li>
                <li>• Collections Framework</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 4: JavaScript & Web</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• JavaScript Basics</li>
                <li>• DOM Manipulation</li>
                <li>• Asynchronous Programming</li>
                <li>• ES6+ Features</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Prerequisites</h3>
          <p className="text-gray-600 mb-6">
            No prior programming experience required. Basic computer literacy and logical thinking skills are helpful but not mandatory.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Career Opportunities</h3>
          <p className="text-gray-600 mb-6">
            Graduates of this course can pursue careers as software developers, web developers, data analysts, automation engineers, and more. The skills learned are applicable across various industries including technology, finance, healthcare, and e-commerce.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Why Choose This Course?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Comprehensive coverage of multiple programming languages</li>
            <li>Hands-on projects and real-world applications</li>
            <li>Expert instructors with industry experience</li>
            <li>Flexible learning schedule</li>
            <li>Certificate upon completion</li>
            <li>Career guidance and placement assistance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
