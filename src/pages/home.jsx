import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  FaUser,
  FaEnvelope,
  FaPhone,
  FaComment,
  FaMapMarkerAlt,
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
  const location = useLocation();
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // useEffect(() => {
  //   const hash = location.hash;
  //   if (hash) {
  //     setTimeout(() => {
  //       const element = document.getElementById(hash.substring(1));
  //       if (element) {
  //         element.scrollIntoView({ behavior: 'smooth' });
  //       }
  //     }, 0);
  //   }
  // }, [location]);

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
        id="hero"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Our Achievements
          </h2>
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
      <section id="courses" className="py-20 px-6 bg-gray-100">
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
              <Link
                to="/programming"
                className="mt-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition block text-center"
              >
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
              <Link
                to="/web-development"
                className="mt-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition block text-center"
              >
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
              <Link
                to="/data-science"
                className="mt-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition block text-center"
              >
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
              <Link
                to="/cloud-computing"
                className="mt-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition block text-center"
              >
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
              <Link
                to="/cyber-security"
                className="mt-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition block text-center"
              >
                Explore Course
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col">
              <div className="flex items-center gap-4 mb-4 hover:grayscale transition-all duration-300">
                <img src={dev} alt="DevOps" className="h-16 w-16 rounded-lg " />
                <h3 className="text-2xl font-semibold text-teal-600">DevOps</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Understand CI/CD pipelines, containerization, and infrastructure
                as code.
              </p>
              <Link
                to="/devops"
                className="mt-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition block text-center"
              >
                Explore Course
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col">
              <div className="flex items-center gap-4 mb-4 hover:grayscale transition-all duration-300">
                <img src={Ai} alt="AI/ML" className="h-16 w-16 rounded-lg" />
                <h3 className="text-2xl font-semibold text-teal-600">AI/ML</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Explore artificial intelligence and machine learning algorithms
                and applications.
              </p>
              <Link
                to="/ai-ml"
                className="mt-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition block text-center"
              >
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
              <Link
                to="/mobile-app-development"
                className="mt-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition block text-center"
              >
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
              <Link
                to="/database-management"
                className="mt-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition block text-center"
              >
                Explore Course
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <div
        className=" px-6 bg-gray-100 text-black"
        role="region"
        aria-label="About Us"
      >
        <div className="max-w-7xl gap-40 rounded-3xl p-8">
          {/* Header Section */}
          <div className="space-y-8 w-10/12 flex  mx-auto my-a">
            <div className=" flex  items-center justify-center  min-w-72">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent text-center ">
                About US
              </h2>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border-l-4 border-teal-500 flex flex-col">
              <p className="text-lg font-semibold">
                At Code With Nishant, we are dedicated to bridging the gap
                between education and industry needs through innovative IT
                training programs designed to empower aspiring professionals in
                Pune and beyond.
              </p>
            </div>
          </div>

          {/* Our Mission & Vision Section */}
          <div className="space-y-8 w-10/12 py-20 flex flex-col mx-auto">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent text-center mb-10">
              Our Mission & Vision
            </h2>

            <div className="grid md:grid-cols-2 gap-20">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border-l-4 border-teal-500 flex flex-col min-h-[200px]">
                <FaBullseye
                  size={32}
                  className="w-20 h-20 mx-auto mb-4 rounded-lg object-cover"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-teal-600 text-center mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 text-center leading-relaxed flex-1">
                  We deliver world-class, practical IT training that empowers
                  individuals to thrive in the dynamic technology landscape,
                  fostering innovation, skill development, and career growth in
                  Pune and beyond.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border-l-4 border-teal-500 flex flex-col min-h-[200px]">
                <FaEye
                  size={32}
                  className="w-20 h-20 mx-auto mb-4 rounded-lgobject-cover"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-teal-600 text-center mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 text-center leading-relaxed flex-1">
                  To become India's foremost IT training powerhouse, renowned
                  for pioneering education, unwavering excellence, and
                  transformative success stories that shape the future of
                  technology professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Our Team
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-600">
            Meet the passionate professionals behind Code With Nishant who are
            dedicated to your success.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={prog}
                alt="Nishant"
                className="w-24 h-24 mx-auto mb-6 rounded-full object-cover"
              />
              <h4 className="font-semibold text-gray-800 text-xl mb-2">
                Ankaj Singh
              </h4>
              <p className="text-sm text-gray-500 mb-4">Programming Expert</p>
              <p className="text-gray-600">
                Experienced IT professional with a passion for teaching and
                mentoring aspiring developers.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={web}
                alt="Team Member 2"
                className="w-24 h-24 mx-auto mb-6 rounded-full object-cover"
              />
              <h4 className="font-semibold text-gray-800 text-xl mb-2">
                Navneet Ranjan
              </h4>
              <p className="text-sm text-gray-500 mb-4">
                Web Development Expert
              </p>
              <p className="text-gray-600">
                Specializes in web development and cloud technologies, bringing
                real-world experience to our courses.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={data}
                alt="Team Member 3"
                className="w-24 h-24 mx-auto mb-6 rounded-full object-cover"
              />
              <h4 className="font-semibold text-gray-800 text-xl mb-2">
                Rahul Madhesiya
              </h4>
              <p className="text-sm text-gray-500 mb-4">Data Science Expert</p>
              <p className="text-gray-600">
                Expert in machine learning and data analysis, helping students
                master cutting-edge technologies.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={cloud}
                alt="Nishant"
                className="w-24 h-24 mx-auto mb-6 rounded-full object-cover"
              />
              <h4 className="font-semibold text-gray-800 text-xl mb-2">
                Rishu Thakur
              </h4>
              <p className="text-sm text-gray-500 mb-4">
                Cloud Cmputing Expert
              </p>
              <p className="text-gray-600">
                Experienced IT professional with a passion for teaching and
                mentoring aspiring developers.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={cyber}
                alt="Team Member 2"
                className="w-24 h-24 mx-auto mb-6 rounded-full object-cover"
              />
              <h4 className="font-semibold text-gray-800 text-xl mb-2">
                Sahil Raj
              </h4>
              <p className="text-sm text-gray-500 mb-4">
                Cyber Security Expert
              </p>
              <p className="text-gray-600">
                Specializes in web development and cloud technologies, bringing
                real-world experience to our courses.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={dev}
                alt="Team Member 3"
                className="w-24 h-24 mx-auto mb-6 rounded-full object-cover"
              />
              <h4 className="font-semibold text-gray-800 text-xl mb-2">
                Ashish Kumar
              </h4>
              <p className="text-sm text-gray-500 mb-4">DevOps Expert</p>
              <p className="text-gray-600">
                Expert in machine learning and data analysis, helping students
                master cutting-edge technologies.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={Ai}
                alt="Nishant"
                className="w-24 h-24 mx-auto mb-6 rounded-full object-cover"
              />
              <h4 className="font-semibold text-gray-800 text-xl mb-2">
                Rohan Jha
              </h4>
              <p className="text-sm text-gray-500 mb-4">AI/ML Expert</p>
              <p className="text-gray-600">
                Experienced IT professional with a passion for teaching and
                mentoring aspiring developers.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={mobile}
                alt="Team Member 2"
                className="w-24 h-24 mx-auto mb-6 rounded-full object-cover"
              />
              <h4 className="font-semibold text-gray-800 text-xl mb-2">
                Prince Kumar
              </h4>
              <p className="text-sm text-gray-500 mb-4">Senior Developer</p>
              <p className="text-gray-600">
                Specializes in web development and cloud technologies, bringing
                real-world experience to our courses.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={database}
                alt="Team Member 3"
                className="w-24 h-18 mx-auto mb-6 rounded-full object-cover"
              />
              <h4 className="font-semibold text-gray-800 text-xl mb-2">
                Pranav Jha
              </h4>
              <p className="text-sm text-gray-500 mb-4">DataBase Expert</p>
              <p className="text-gray-600">
                Expert in machine learning and data analysis, helping students
                master cutting-edge technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            What Our Students Say
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-600">
            Hear from our successful graduates who have transformed their
            careers through our training programs.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaEye size={48} className="mx-auto mb-6 text-teal-600" />
              <p className="text-gray-600 mb-6 italic">
                "The Web Development course at Code With Nishant completely
                changed my career. I went from a non-technical background to
                landing a job as a front-end developer within 3 months of
                completing the course."
              </p>
              <h4 className="font-semibold text-gray-800">Priya Sharma</h4>
              <p className="text-sm text-gray-500">
                Front-end Developer, TechCorp
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaEye size={48} className="mx-auto mb-6 text-teal-600" />
              <p className="text-gray-600 mb-6 italic">
                "The Data Science program provided me with hands-on experience
                and real-world projects. The instructors were knowledgeable and
                the curriculum was up-to-date with industry standards."
              </p>
              <h4 className="font-semibold text-gray-800">Rahul Patel</h4>
              <p className="text-sm text-gray-500">
                Data Analyst, DataTech Solutions
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaEye size={48} className="mx-auto mb-6 text-teal-600" />
              <p className="text-gray-600 mb-6 italic">
                "Thanks to the Cyber Security course, I now work as a security
                consultant. The practical approach and real-world scenarios
                prepared me perfectly for the job market."
              </p>
              <h4 className="font-semibold text-gray-800">Anjali Gupta</h4>
              <p className="text-sm text-gray-500">
                Cyber Security Consultant, SecureNet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-blue-400/10"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl p-2 font-bold mb-4 bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Enquiry Form
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Have questions about our courses? Get in touch with us! We're here to guide you on your IT journey.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <form
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Form submitted!");
                }}
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-800 mb-3 flex items-center transition-colors group-focus-within:text-teal-600"
                    >
                      <FaUser className="mr-3 text-teal-500 group-focus-within:text-teal-600" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/20 transition-all duration-300 bg-gray-50/50"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-800 mb-3 flex items-center transition-colors group-focus-within:text-teal-600"
                    >
                      <FaEnvelope className="mr-3 text-teal-500 group-focus-within:text-teal-600" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/20 transition-all duration-300 bg-gray-50/50"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-800 mb-3 flex items-center transition-colors group-focus-within:text-teal-600"
                  >
                    <FaPhone className="mr-3 text-teal-500 group-focus-within:text-teal-600" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/20 transition-all duration-300 bg-gray-50/50"
                    placeholder="+91-123-456-7890"
                  />
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-800 mb-3 flex items-center transition-colors group-focus-within:text-teal-600"
                  >
                    <FaComment className="mr-3 text-teal-500 group-focus-within:text-teal-600" />
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/20 transition-all duration-300 bg-gray-50/50 resize-none"
                    placeholder="Tell us about your interests and how we can help..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-teal-500/50"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <FaBullseye className="mr-3 text-teal-500" />
                  Our Location
                </h3>
                <div className="space-y-4 mb-6">
                  <p className="text-gray-700 font-medium">
                    Code With Nishant
                  </p>
                  <p className="text-gray-600">
                    Pune, Maharashtra, India
                  </p>
                  <div className="flex items-center text-gray-600">
                    <FaPhone className="mr-2 text-teal-500" />
                    +91-123-456-7890
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaEnvelope className="mr-2 text-teal-500" />
                    info@mindscriptstech.com
                  </div>
                </div>
                <div className="h-64 rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    title="Code With Nishant Location"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d331.90160595154947!2d73.78627833271203!3d18.62775634819684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1764792310499!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-6 rounded-2xl text-white shadow-2xl">
                <h4 className="text-xl font-bold mb-4">Why Choose Us?</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <FaGraduationCap className="mr-2" />
                    Expert instructors with industry experience
                  </li>
                  <li className="flex items-center">
                    <FaBullseye className="mr-2" />
                    Hands-on practical training
                  </li>
                  <li className="flex items-center">
                    <FaEye className="mr-2" />
                    95% placement success rate
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/10 via-purple-400/10 to-teal-400/10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Ready to start your IT journey? Reach out to us for more information about our courses, admissions, or any queries you may have. We're here to help you succeed.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-indigo-600 transition-colors">
                  Address
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tanaji Nagar Akurti Apartment Pimpri Chinchwaad, 411033<br />
                  Pune, Maharashtra, India
                </p>
              </div>
            </div>
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaPhone className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors">
                  Phone
                </h3>
                <p className="text-gray-600 text-lg font-medium">
                  +91 9142836738
                </p>
              </div>
            </div>
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-teal-600 transition-colors">
                  Email
                </h3>
                <p className="text-gray-600 text-lg font-medium">
                  nishant20kumar1100@gmail.com
                </p>
              </div>
            </div>
          </div>
          {/* <div className="mt-12 p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 rounded-2xl text-white text-center">
            <p className="text-lg font-semibold mb-4">Follow us on social media for updates!</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="hover:scale-110 transition-transform">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <FaWhatsapp className="text-xl" />
              </a>
            </div> */}
          {/* </div> */}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white py-10 px-6 w-full">
        <div className="max-w-6xl mx-auto text-center flex">
          <div className="flex-1 flex items-center justify-center">
            <button onClick={() => window.location.href = "/"} className="hover:underline">
              <img src={logo} alt="Code with Nishant" className="h-10 " />
            </button>
          </div>
          <div className="flex-1 flex items-center flex-col justify-center gap-2">
            <Link to="/courses" className="hover:underline">
              Courses
            </Link>
            <Link to="/students" className="hover:underline">
              Students
            </Link>
            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
          </div>
          <p className="flex-1 flex items-center justify-center text-center">
            &copy; 2023 Code With Nishant. All rights reserved.
          </p>
          <div className="flex justify-center flex-1 gap-6 items-center">
            <a
              href="https://www.linkedin.com/in/nishant-kumar-234aaa269/"
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
