import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import prog from "../Image/OIP.jpg";

export default function Programming() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <Link to="/#courses" className="inline-block mb-6 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">Back to Home</Link>
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

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Detailed Syllabus</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">Week 1-2: Programming Fundamentals</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Introduction to Programming Languages</li>
              <li>• Variables, Data Types, and Operators</li>
              <li>• Conditional Statements and Loops</li>
              <li>• Functions and Scope</li>
              <li>• Basic Input/Output Operations</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 3-5: Python Programming</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Python Syntax and Basic Constructs</li>
              <li>• Lists, Tuples, Dictionaries, and Sets</li>
              <li>• Functions, Modules, and Packages</li>
              <li>• File I/O and Exception Handling</li>
              <li>• Introduction to Libraries: NumPy, Pandas</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 6-8: Java Programming</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Java Basics: Classes, Objects, Methods</li>
              <li>• Inheritance, Polymorphism, Encapsulation</li>
              <li>• Exception Handling and File I/O</li>
              <li>• Collections Framework: Lists, Maps, Sets</li>
              <li>• Multithreading and Concurrency</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 9-11: JavaScript & Web Development</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• JavaScript Fundamentals</li>
              <li>• DOM Manipulation and Events</li>
              <li>• Asynchronous Programming: Promises, Async/Await</li>
              <li>• ES6+ Features: Arrow Functions, Modules</li>
              <li>• Introduction to Frameworks: React Basics</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 12-13: Advanced Topics</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Algorithm Design and Analysis</li>
              <li>• Data Structures: Trees, Graphs, Hash Tables</li>
              <li>• Version Control with Git</li>
              <li>• Testing and Debugging Techniques</li>
              <li>• Best Practices for Code Quality</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 14-15: Capstone Project</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Project Planning and Design</li>
              <li>• Implementation using Multiple Languages</li>
              <li>• Code Review and Optimization</li>
              <li>• Presentation and Documentation</li>
            </ul>
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
