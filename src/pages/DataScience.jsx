import React from 'react';
import { Link } from "react-router-dom";
import data from "../Image/data_science.png";

export default function DataScience() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <Link to="/" className="inline-block mb-6 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">Back to Home</Link>
      <div className="max-w-6xl mx-auto text-center">
        <img src={data} alt="Data Science" className="h-32 w-32 mx-auto mb-6 rounded-lg" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Data Science Course</h1>
        <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-600">
          Dive into data analysis, machine learning, and AI with hands-on projects. Learn tools like Python, R, Pandas, and TensorFlow.
        </p>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">Course Details</h2>
          <p className="text-gray-600">Detailed information about the Data Science course will be added here.</p>
        </div>
      </div>
    </div>
  );
}
