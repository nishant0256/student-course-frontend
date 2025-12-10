import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import database from "../Image/Dtabase.png";

export default function DatabaseManagement() {
  useEffect(() => {
     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
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

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Detailed Syllabus</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">Week 1-2: Database Fundamentals and Design</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Introduction to databases and data management</li>
              <li>• Relational database concepts and normalization</li>
              <li>• Entity-Relationship modeling and design</li>
              <li>• Database architecture and components</li>
              <li>• SQL basics: DDL, DML, DCL commands</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 3-5: Advanced SQL and Query Optimization</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Complex joins, subqueries, and CTEs</li>
              <li>• Window functions and analytical queries</li>
              <li>• Stored procedures, functions, and triggers</li>
              <li>• Transaction management and concurrency</li>
              <li>• Query optimization and execution plans</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 6-8: Database Administration with MySQL/PostgreSQL</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Installation, configuration, and user management</li>
              <li>• Backup strategies and recovery procedures</li>
              <li>• Performance monitoring and tuning</li>
              <li>• Security implementation and access control</li>
              <li>• Replication and high availability</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 9-11: NoSQL Databases and Big Data</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• MongoDB document database fundamentals</li>
              <li>• CRUD operations and aggregation framework</li>
              <li>• Cassandra and other NoSQL databases</li>
              <li>• Data modeling for NoSQL systems</li>
              <li>• Big data concepts and Hadoop ecosystem</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 12-14: Cloud Databases and Data Warehousing</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• AWS RDS, Aurora, and DynamoDB</li>
              <li>• Azure SQL Database and Cosmos DB</li>
              <li>• Google Cloud SQL and BigQuery</li>
              <li>• Data warehousing concepts and ETL processes</li>
              <li>• Cloud database migration strategies</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 15-16: Advanced Topics and Projects</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Database security and encryption</li>
              <li>• Performance optimization and scaling</li>
              <li>• Database monitoring and alerting</li>
              <li>• Real-world database project implementation</li>
              <li>• Certification preparation and career guidance</li>
            </ul>
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
