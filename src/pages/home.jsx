import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="bg-gray-100 overflow-hidden">

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6 section-glow"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-teal-400/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/30 blur-3xl rounded-full" />

        <div className="relative z-10 text-center max-w-6xl animate-fadeUp">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-10">
            <span className="text-gradient">Empowering Your IT</span>
            <br />
            <span className="text-white">Career with Expert</span>
            <br />
            <span className="text-gradient">Training</span>
          </h1>

          <div className="glass max-w-3xl mx-auto p-8 rounded-3xl mb-12">
            <p className="text-lg md:text-xl text-gray-200">
              <span className="text-teal-300 font-semibold">
                Code With Nishant
              </span>{" "}
              empowers students with{" "}
              <span className="text-white font-semibold">
                real-world IT skills
              </span>{" "}
              to become job-ready professionals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/courses"
              className="px-12 py-4 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 font-bold text-black hover-glow"
            >
              Explore Courses
            </Link>
            <a
              href="#contact"
              className="px-12 py-4 rounded-full border border-white/40 text-white backdrop-blur hover-glow"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-24 bg-gradient-to-br from-teal-600 to-blue-700 text-white section-glow">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            ["500+", "Students Trained"],
            ["20+", "Courses"],
            ["95%", "Placement Rate"],
            ["10+", "Years Experience"],
          ].map(([num, label]) => (
            <div key={label} className="glass p-8 rounded-2xl hover-glow">
              <h3 className="text-4xl font-bold mb-2">{num}</h3>
              <p className="text-white/80">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= COURSES ================= */}
      <section className="py-28 section-glow">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold mb-6 text-gradient">Our Courses</h2>
          <div className="grid md:grid-cols-3 gap-10 mt-14">
            {[
              [prog, "Programming", "/programming"],
              [web, "Web Development", "/web-development"],
              [data, "Data Science", "/data-science"],
              [cloud, "Cloud Computing", "/cloud-computing"],
              [cyber, "Cyber Security", "/cyber-security"],
              [dev, "DevOps", "/devops"],
              [Ai, "AI / ML", "/ai-ml"],
              [mobile, "Mobile App Dev", "/mobile-app-development"],
              [database, "Database", "/database-management"],
            ].map(([img, title, link]) => (
              <div
                key={title}
                className="bg-white p-8 rounded-2xl shadow-xl hover-glow flex flex-col"
              >
                <img
                  src={img}
                  alt={title}
                  className="h-20 w-20 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-teal-600 mb-3">
                  {title}
                </h3>
                <Link
                  to={link}
                  className="mt-auto rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-2.5 font-semibold"
                >
                  Explore Course
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="py-28 bg-gradient-to-br from-indigo-50 via-purple-50 to-teal-50 section-glow"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
          <form className="glass p-10 rounded-3xl hover-glow">
            {["name", "email", "phone"].map((f) => (
              <input
                key={f}
                name={f}
                value={formData[f]}
                onChange={handleInputChange}
                placeholder={f.toUpperCase()}
                className="w-full mb-4 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-teal-400"
              />
            ))}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              rows={4}
              className="w-full mb-6 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-teal-400"
            />
            <button className="w-full py-4 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold hover:scale-105 transition">
              Send Enquiry
            </button>
          </form>

          <div className="glass p-10 rounded-3xl hover-glow text-center">
            <h3 className="text-3xl font-bold mb-6 text-gradient">
              Contact Info
            </h3>
            <p className="mb-3">📍 Pune, Maharashtra</p>
            <p className="mb-3">📞 +91 9142836738</p>
            <p>✉️ nishant20kumar1100@gmail.com</p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-14">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6">
          <img src={logo} alt="logo" className="h-10" />
          <p className="text-white/70 text-sm">
            © 2023 Code With Nishant. All rights reserved.
          </p>
          <div className="flex gap-5">
            {[FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp].map(
              (Icon, i) => (
                <Icon
                  key={i}
                  className="w-6 h-6 text-gray-400 hover:text-white transition"
                />
              )
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
