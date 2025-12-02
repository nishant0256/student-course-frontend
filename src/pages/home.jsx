import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaChevronDown,
  FaBullseye,
  FaEye,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import prog from "../Image/OIP.jpg";
import Ai from "../Image/AI.png";
import cloud from "../Image/cloud.png";
import cyber from "../Image/Cyber-secu.png";
import data from "../Image/data_science.png";
import dev from "../Image/DevOps.png";
import database from "../Image/Dtabase.png";
import mobile from "../Image/Mobile.png";
import web from "../Image/web-dev.png";
import logo from "../Image/logo.png";

export default function Home() {
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAcceptCookies = () => {
    setShowCookieBanner(false);
    // In a real app, you'd set a cookie or localStorage here
  };

  const handleDeclineCookies = () => {
    setShowCookieBanner(false);
    // In a real app, you'd handle declining cookies
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative text-white py-20 px-6 h-screen"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Empowering Your IT
            <br />
            Career with Expert
            <br />
            Training
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-teal-100 bg-black bg-opacity-50 p-4 rounded shadow-2xl">
            Code With Nishant is a leading IT Training institute in Pune, India
            with a mission to empower individuals with practical knowledge and
            skills in the field of technology. We offer a wide range of courses
            designed to meet the needs of students and professionals alike.
          </p>
          <button className="bg-green-200 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Our Achievements</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm">
              <FaBullseye size={48} className="mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">500+</h3>
              <p className="text-lg">Students Trained</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm">
              <FaGraduationCap size={48} className="mx-auto mb-4 " />
              <h3 className="text-3xl font-bold mb-2">20+</h3>
              <p className="text-lg">Courses Offered</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm">
              <FaEye size={48} className="mx-auto mb-4 " />
              <h3 className="text-3xl font-bold mb-2">95%</h3>
              <p className="text-lg">Placement Success</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm">
              <FaBullseye size={48} className="mx-auto mb-4 " />
              <h3 className="text-3xl font-bold mb-2">10+</h3>
              <p className="text-lg">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/*  IT Courses Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <FaGraduationCap
            size={128}
            className="mx-auto mb-6 rounded-full text-teal-800"
          />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Our Courses
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-600">
            Our IT courses are designed to provide comprehensive training in
            cutting-edge technologies, equipping you with the skills needed to
            thrive in the digital world. From programming fundamentals to
            advanced cloud computing, we cover a wide range of topics to prepare
            you for real-world challenges.
          </p>
          <div className="grid md:grid-cols-3  gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col">
              <div className="flex items-center gap-4 mb-4 hover:grayscale transition-all duration-300">
                <img
                  src={prog}
                  alt="Programming"
                  className="h-16 w-16 rounded-lg"
                />
                <h3 className="text-2xl font-semibold text-teal-600">
                  Programming
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Learn languages like Python, Java, and JavaScript to build
                robust applications.
              </p>
              <Link to="/programming" className="mt-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition block text-center">
                Explore Course
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col">
              <div className="flex items-center gap-4 mb-4 hover:grayscale transition-all duration-300">
                <img
                  src={web}
                  alt="Web Dev"
                  className="h-16 w-16 rounded-lg "
                />
                <h3 className="text-2xl font-semibold text-teal-600">
                  Web Development
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Master front-end and back-end technologies to create dynamic
                websites.
              </p>
              <Link to="/web-development" className="mt-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition block text-center">
                Explore Course
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col ">
              <div className="flex items-center gap-4 mb-4 hover:grayscale transition-all duration-300">
                <img
                  src={data}
                  alt="Data Science"
                  className="h-16 w-16 rounded-lg  "
                />
                <h3 className="text-2xl font-semibold text-teal-600">
                  Data Science
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Dive into data analysis, machine learning, and AI with hands-on
                projects.
              </p>
              <Link to="/data-science" className="mt-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition block text-center">
                Explore Course
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col">
              <div className="flex items-center gap-4 mb-4  hover:grayscale transition-all duration-300">
                <img
                  src={cloud}
                  alt="Cloud Computing"
                  className="h-16 w-16 rounded-lg"
                />
                <h3 className="text-2xl font-semibold text-teal-600">
                  Cloud Computing
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Get certified in AWS, Azure, and Google Cloud to manage cloud
                infrastructure.
              </p>
              <Link to="/cloud-computing" className="mt-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition block text-center">
                Explore Course
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col">
              <div className="flex items-center gap-4 mb-4   hover:grayscale transition-all duration-300">
                <img
                  src={cyber}
                  alt="Cyber Security"
                  className="h-16 w-16 rounded-lg"
                />
                <h3 className="text-2xl font-semibold text-teal-600">
                  Cyber Security
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Learn to protect systems and data from cyber threats and
                vulnerabilities.
              </p>
              <Link to="/cyber-security" className="mt-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition block text-center">
                Explore Course
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col">
              <div className="flex items-center gap-4 mb-4 hover:grayscale transition-all duration-300">
                <img
                  src={dev}
                  alt="DevOps"
                  className="h-16 w-16 rounded-lg "
                />
                <h3 className="text-2xl font-semibold text-teal-600">
                  DevOps
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Understand CI/CD pipelines, containerization, and infrastructure
                as code.
              </p>
              <Link to="/devops" className="mt-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition block text-center">
                Explore Course
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col">
              <div className="flex items-center gap-4 mb-4 hover:grayscale transition-all duration-300">
                <img
                  src={Ai}
                  alt="AI/ML"
                  className="h-16 w-16 rounded-lg"
                />
                <h3 className="text-2xl font-semibold text-teal-600">AI/ML</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Explore artificial intelligence and machine learning algorithms
                and applications.
              </p>
              <Link to="/ai-ml" className="mt-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition block text-center">
                Explore Course
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lghover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col">
              <div className="flex items-center gap-4 mb-4 hover:grayscale transition-all duration-300">
                <img
                  src={mobile}
                  alt="Mobile Dev"
                  className="h-16 w-16 rounded-lg "
                />
                <h3 className="text-2xl font-semibold text-teal-600">
                  Mobile App Development
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Build mobile applications for Android and iOS platforms using
                modern frameworks.
              </p>
              <Link to="/mobile-app-development" className="mt-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition block text-center">
                Explore Course
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col">
              <div className="flex items-center gap-4 mb-4 hover:grayscale transition-all duration-300">
                <img
                  src={database}
                  alt="Database"
                  className="h-16 w-16 rounded-lg "
                />
                <h3 className="text-2xl font-semibold text-teal-600">
                  Database Management
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Learn SQL and NoSQL databases to efficiently store and retrieve
                data.
              </p>
              <Link to="/database-management" className="mt-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition block text-center">
                Explore Course
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
     <div className=" px-6 bg-gray-100 text-black" role="region" aria-label="About Us">
      <div className="max-w-7xl gap-40 rounded-3xl p-8">
        {/* Header Section */}
        <div className="space-y-8 w-10/12 flex  mx-auto my-a">
          <div className=" flex  items-center justify-center  min-w-72">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent text-center ">About US</h2>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border-l-4 border-teal-500 flex flex-col">
            <p className="text-lg font-semibold">At Code With Nishant, we are dedicated to bridging the gap between education and industry needs through innovative IT training programs designed to empower aspiring professionals in Pune and beyond.</p>
          </div>
        </div>

        {/* Our Mission & Vision Section */}
        <div className="space-y-8 w-10/12 py-20 flex flex-col mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent text-center mb-10">Our Mission & Vision</h2>

          <div className="grid md:grid-cols-2 gap-20">
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border-l-4 border-teal-500 flex flex-col min-h-[200px]">
                  <FaBullseye size={32} className="w-20 h-20 mx-auto mb-4 rounded-lg object-cover" loading="lazy" />
                  <h3 className="text-xl font-bold text-teal-600 text-center mb-4">Our Mission</h3>
                  <p className="text-gray-700 text-center leading-relaxed flex-1">
                    We deliver world-class, practical IT training that empowers individuals to thrive in the dynamic technology landscape, fostering innovation, skill development, and career growth in Pune and beyond.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border-l-4 border-teal-500 flex flex-col min-h-[200px]">
                  <FaEye size={32} className="w-20 h-20 mx-auto mb-4 rounded-lgobject-cover" loading="lazy" />
                  <h3 className="text-xl font-bold text-teal-600 text-center mb-4">Our Vision</h3>
                  <p className="text-gray-700 text-center leading-relaxed flex-1">
                    To become India's foremost IT training powerhouse, renowned for pioneering education, unwavering excellence, and transformative success stories that shape the future of technology professionals.
                  </p>
                </div>
              </div>
        </div>
      </div>
    </div>
      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            What Our Students Say
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-600">
            Hear from our successful graduates who have transformed their careers through our training programs.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaEye size={48} className="mx-auto mb-6 text-teal-600" />
              <p className="text-gray-600 mb-6 italic">
                "The Web Development course at Code With Nishant completely changed my career. I went from a non-technical background to landing a job as a front-end developer within 3 months of completing the course."
              </p>
              <h4 className="font-semibold text-gray-800">Priya Sharma</h4>
              <p className="text-sm text-gray-500">Front-end Developer, TechCorp</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaEye size={48} className="mx-auto mb-6 text-teal-600" />
              <p className="text-gray-600 mb-6 italic">
                "The Data Science program provided me with hands-on experience and real-world projects. The instructors were knowledgeable and the curriculum was up-to-date with industry standards."
              </p>
              <h4 className="font-semibold text-gray-800">Rahul Patel</h4>
              <p className="text-sm text-gray-500">Data Analyst, DataTech Solutions</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaEye size={48} className="mx-auto mb-6 text-teal-600" />
              <p className="text-gray-600 mb-6 italic">
                "Thanks to the Cyber Security course, I now work as a security consultant. The practical approach and real-world scenarios prepared me perfectly for the job market."
              </p>
              <h4 className="font-semibold text-gray-800">Anjali Gupta</h4>
              <p className="text-sm text-gray-500">Cyber Security Consultant, SecureNet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 text-center">
            Enquiry Form
          </h2>
          <p className="text-lg md:text-xl mb-8 text-center text-gray-600">
            Have questions about our courses? Get in touch with us!
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <form
              className="bg-white p-8 rounded-lg shadow-md"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted!");
              }}
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Submit Enquiry
              </button>
            </form>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Our Location
              </h3>
              <p className="text-gray-600 mb-4">
                Code With Nishant
                <br />
                Pune, Maharashtra, India
              </p>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Map Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Contact Us
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-600">
            Ready to start your IT journey? Reach out to us for more information
            about our courses, admissions, or any queries you may have. We're
            here to help you succeed.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Address
              </h3>
              <p className="text-gray-600">
                Code With Nishant
                <br />
                Pune, Maharashtra, India
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Phone
              </h3>
              <p className="text-gray-600">+91-123-456-7890</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Email
              </h3>
              <p className="text-gray-600">info@mindscriptstech.com</p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 text-center">
              Follow Us
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://linkedin.com/company/mindscriptstech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                <FaLinkedin className="w-8 h-8" />
              </a>
              <a
                href="https://facebook.com/mindscriptstech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                <FaFacebook className="w-8 h-8" />
              </a>
              <a
                href="https://instagram.com/mindscriptstech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                <FaInstagram className="w-8 h-8" />
              </a>
              <a
                href="https://twitter.com/mindscriptstech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                <FaTwitter className="w-8 h-8" />
              </a>
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition"
              >
                <FaWhatsapp className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">
            &copy; 2023 Code With Nishant. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/company/mindscriptstech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com/mindscriptstech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/mindscriptstech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/mindscriptstech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
