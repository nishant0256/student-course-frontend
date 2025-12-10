import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import dev from "../Image/DevOps.png";

export default function DevOps() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  } , []);
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <Link to="/" className="inline-block mb-6 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">Back to Home</Link>
      <div className="max-w-6xl mx-auto text-center">
        <img src={dev} alt="DevOps" className="h-32 w-32 mx-auto mb-6 rounded-lg" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">DevOps Course</h1>
        <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-600">
          Understand CI/CD pipelines, containerization, and infrastructure as code. Learn tools like Docker, Kubernetes, and Jenkins.
        </p>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">Course Overview</h2>
          <p className="text-gray-600 mb-6">
            Our DevOps course bridges the gap between development and operations, teaching you to automate and streamline software delivery processes. You'll learn modern DevOps practices, tools, and methodologies to build, test, deploy, and monitor applications efficiently in collaborative environments.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">What You'll Learn</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>DevOps principles and culture</li>
            <li>Continuous Integration and Continuous Deployment (CI/CD)</li>
            <li>Version control with Git and Git workflows</li>
            <li>Containerization with Docker</li>
            <li>Orchestration with Kubernetes</li>
            <li>Infrastructure as Code (IaC) with Terraform and Ansible</li>
            <li>CI/CD pipelines with Jenkins, GitHub Actions, and GitLab CI</li>
            <li>Monitoring and logging with Prometheus, Grafana, and ELK Stack</li>
            <li>Cloud DevOps practices on AWS, Azure, and GCP</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Course Curriculum</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 1: DevOps Fundamentals</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Introduction to DevOps</li>
                <li>• Version Control with Git</li>
                <li>• Collaborative Development</li>
                <li>• Agile and Scrum Methodologies</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 2: CI/CD Pipelines</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Continuous Integration Concepts</li>
                <li>• Jenkins Pipeline Setup</li>
                <li>• GitHub Actions and GitLab CI</li>
                <li>• Automated Testing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 3: Containerization and Orchestration</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Docker Fundamentals</li>
                <li>• Building and Running Containers</li>
                <li>• Kubernetes Basics</li>
                <li>• Deployment and Scaling</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 4: Infrastructure and Monitoring</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Terraform for IaC</li>
                <li>• Ansible Configuration Management</li>
                <li>• Monitoring with Prometheus and Grafana</li>
                <li>• Logging and Alerting</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Prerequisites</h3>
          <p className="text-gray-600 mb-6">
            Basic programming knowledge and familiarity with Linux commands. Understanding of software development lifecycle is helpful but not required.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Career Opportunities</h3>
          <p className="text-gray-600 mb-6">
            DevOps engineers are highly sought after. Graduates can work as DevOps engineers, site reliability engineers (SRE), automation engineers, cloud DevOps specialists, and release managers. Opportunities in tech companies, startups, and enterprises adopting DevOps practices.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Why Choose This Course?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Comprehensive DevOps toolset and practices</li>
            <li>Hands-on projects with real CI/CD pipelines</li>
            <li>Cloud-integrated DevOps workflows</li>
            <li>Industry-standard tools and methodologies</li>
            <li>Certification preparation for DevOps tools</li>
            <li>Career support in DevOps roles</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Detailed Syllabus</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">Week 1-2: DevOps Introduction and Version Control</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• DevOps philosophy and benefits</li>
              <li>• Git basics: commits, branches, merges</li>
              <li>• Git workflows: GitFlow, trunk-based</li>
              <li>• Collaborative platforms: GitHub, GitLab</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 3-5: Continuous Integration and Delivery</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• CI/CD concepts and pipeline design</li>
              <li>• Jenkins installation and job configuration</li>
              <li>• Building pipelines with declarative syntax</li>
              <li>• Automated testing integration</li>
              <li>• GitHub Actions for CI/CD</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 6-8: Containerization with Docker</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Docker architecture and commands</li>
              <li>• Dockerfile creation and best practices</li>
              <li>• Multi-stage builds and optimization</li>
              <li>• Docker Compose for multi-container apps</li>
              <li>• Docker in CI/CD pipelines</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 9-11: Kubernetes Orchestration</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Kubernetes concepts: pods, services, deployments</li>
              <li>• Minikube for local development</li>
              <li>• Helm for package management</li>
              <li>• Scaling and load balancing</li>
              <li>• Kubernetes security basics</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 12-14: Infrastructure as Code and Configuration Management</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Terraform basics and providers</li>
              <li>• Infrastructure provisioning with Terraform</li>
              <li>• Ansible playbooks and roles</li>
              <li>• Configuration management patterns</li>
              <li>• State management and collaboration</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 15-16: Monitoring, Logging, and Projects</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Prometheus setup and metrics collection</li>
              <li>• Grafana dashboards and alerting</li>
              <li>• ELK Stack for logging</li>
              <li>• End-to-end DevOps project</li>
              <li>• DevOps certification preparation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
