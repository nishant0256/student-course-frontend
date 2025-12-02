import React from 'react';
import { Link } from "react-router-dom";
import database from "../Image/Dtabase.png";

export default function DatabaseManagement() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <Link to="/" className="inline-block mb-6 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">Back to Home</Link>
      <div className="max-w-6xl mx-auto text-center">
        <img src={database} alt="Database Management" className="h-32 w-32 mx-auto mb-6 rounded-lg" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Database Management Course</h1>
        <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-600">
          Learn SQL and NoSQL databases to efficiently store and retrieve data. Covers MySQL, MongoDB, and database design principles.
        </p>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">Course Overview</h2>
          <p className="text-gray-600 mb-6">
            Our Database Management course teaches you to design, implement, and maintain efficient database systems. You'll master both relational and non-relational databases, learning to optimize performance, ensure data integrity, and implement robust data management solutions.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">What You'll Learn</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Database design principles and normalization</li>
            <li>SQL programming and advanced queries</li>
            <li>MySQL, PostgreSQL, and Oracle databases</li>
            <li>NoSQL databases (MongoDB, Cassandra)</li>
            <li>Database administration and maintenance</li>
            <li>Performance tuning and optimization</li>
            <li>Data warehousing and ETL processes</li>
            <li>Database security and backup strategies</li>
            <li>Cloud database services (AWS RDS, Azure SQL)</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Course Curriculum</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 1: SQL Fundamentals</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Database Concepts</li>
                <li>• SQL Basics (SELECT, INSERT, UPDATE)</li>
                <li>• Joins and Subqueries</li>
                <li>• Database Design</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 2: Advanced SQL</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Stored Procedures</li>
                <li>• Triggers and Functions</li>
                <li>• Performance Optimization</li>
                <li>• Transaction Management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 3: NoSQL Databases</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• MongoDB Fundamentals</li>
                <li>• Document Databases</li>
                <li>• Big Data Concepts</li>
                <li>• Data Migration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 4: Database Administration</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Database Security</li>
                <li>• Backup and Recovery</li>
                <li>• Cloud Databases</li>
                <li>• Monitoring and Maintenance</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Prerequisites</h3>
          <p className="text-gray-600 mb-6">
            Basic computer skills and logical thinking. No prior database experience required, though basic programming knowledge is helpful.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Career Opportunities</h3>
          <p className="text-gray-600 mb-6">
            Database professionals are essential in every organization. Graduates can work as database administrators, database developers, data architects, SQL developers, and database analysts. Opportunities in IT departments, consulting firms, and data-driven companies.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Why Choose This Course?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Comprehensive SQL and NoSQL coverage</li>
            <li>Hands-on database projects</li>
            <li>Industry-standard database systems</li>
            <li>Performance optimization skills</li>
            <li>Database certification preparation</li>
            <li>Practical database administration experience</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
