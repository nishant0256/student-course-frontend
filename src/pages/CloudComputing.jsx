import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import cloud from "../Image/cloud.png";

export default function CloudComputing() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  } , []);
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <Link to="/" className="inline-block mb-6 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">Back to Home</Link>
      <div className="max-w-6xl mx-auto text-center">
        <img src={cloud} alt="Cloud Computing" className="h-32 w-32 mx-auto mb-6 rounded-lg" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Cloud Computing Course</h1>
        <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-600">
          Get certified in AWS, Azure, and Google Cloud to manage cloud infrastructure. Learn deployment, scaling, and cloud security.
        </p>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">Course Overview</h2>
          <p className="text-gray-600 mb-6">
            Our Cloud Computing course provides comprehensive knowledge of cloud platforms and services. You'll learn to design, deploy, and manage cloud infrastructure, applications, and services using leading cloud providers like AWS, Microsoft Azure, and Google Cloud Platform.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">What You'll Learn</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Cloud computing fundamentals and architecture</li>
            <li>AWS services (EC2, S3, Lambda, RDS, etc.)</li>
            <li>Microsoft Azure cloud services and solutions</li>
            <li>Google Cloud Platform (GCP) tools and services</li>
            <li>Infrastructure as Code with Terraform and CloudFormation</li>
            <li>Containerization with Docker and Kubernetes</li>
            <li>Serverless computing and microservices</li>
            <li>Cloud security, compliance, and best practices</li>
            <li>DevOps practices in cloud environments</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Course Curriculum</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 1: Cloud Fundamentals</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Introduction to Cloud Computing</li>
                <li>• Cloud Service Models</li>
                <li>• Cloud Deployment Models</li>
                <li>• Cloud Architecture Design</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 2: AWS Deep Dive</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• EC2 and Compute Services</li>
                <li>• Storage Solutions (S3, EBS)</li>
                <li>• Database Services (RDS, DynamoDB)</li>
                <li>• Networking and Security</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 3: Azure & GCP</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Azure Virtual Machines</li>
                <li>• Azure Storage and Databases</li>
                <li>• Google Compute Engine</li>
                <li>• GCP Storage and BigQuery</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 4: Advanced Topics</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Container Orchestration</li>
                <li>• Serverless Computing</li>
                <li>• Cloud Migration Strategies</li>
                <li>• Cost Optimization</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Detailed Syllabus</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">Week 1-2: Cloud Computing Fundamentals</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Evolution and benefits of cloud computing</li>
              <li>• IaaS, PaaS, SaaS service models</li>
              <li>• Public, private, and hybrid clouds</li>
              <li>• Cloud security and compliance basics</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 3-6: AWS Services and Solutions</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• EC2 instances and auto-scaling</li>
              <li>• S3 storage classes and lifecycle policies</li>
              <li>• RDS and DynamoDB database services</li>
              <li>• VPC networking and security groups</li>
              <li>• IAM roles and policies</li>
              <li>• CloudFormation infrastructure as code</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 7-9: Microsoft Azure Platform</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Azure Virtual Machines and scale sets</li>
              <li>• Azure Storage accounts and blob storage</li>
              <li>• Azure SQL Database and Cosmos DB</li>
              <li>• Azure Active Directory and RBAC</li>
              <li>• Azure Resource Manager templates</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 10-12: Google Cloud Platform</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Compute Engine and App Engine</li>
              <li>• Cloud Storage and persistent disks</li>
              <li>• BigQuery and Cloud SQL</li>
              <li>• Kubernetes Engine for containers</li>
              <li>• Cloud Functions for serverless</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 13-15: Advanced Cloud Technologies</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Docker containerization</li>
              <li>• Kubernetes orchestration</li>
              <li>• Serverless computing with Lambda/Azure Functions</li>
              <li>• Cloud migration strategies and tools</li>
              <li>• Multi-cloud architectures</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 16: Cloud Projects and Certification</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Building scalable cloud applications</li>
              <li>• Cost optimization and monitoring</li>
              <li>• Cloud security best practices</li>
              <li>• Certification preparation and practice exams</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Prerequisites</h3>
          <p className="text-gray-600 mb-6">
            Basic understanding of IT concepts and networking. Familiarity with Linux command line and basic programming concepts is helpful but not required.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Career Opportunities</h3>
          <p className="text-gray-600 mb-6">
            Cloud computing professionals are in high demand. Graduates can work as cloud architects, cloud engineers, DevOps engineers, cloud consultants, and solutions architects. Opportunities in all major industries adopting cloud technologies.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Why Choose This Course?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Multi-cloud expertise (AWS, Azure, GCP)</li>
            <li>Hands-on labs and real cloud environments</li>
            <li>Industry-recognized certifications preparation</li>
            <li>Practical projects and case studies</li>
            <li>Expert instructors with cloud certifications</li>
            <li>Job placement assistance and career guidance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
