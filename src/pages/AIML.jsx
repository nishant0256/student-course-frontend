import React from 'react';
import { Link } from "react-router-dom";
import Ai from "../Image/AI.png";

export default function AIML() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <Link to="/" className="inline-block mb-6 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">Back to Home</Link>
      <div className="max-w-6xl mx-auto text-center">
        <img src={Ai} alt="AI/ML" className="h-32 w-32 mx-auto mb-6 rounded-lg" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">AI/ML Course</h1>
        <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-600">
          Explore artificial intelligence and machine learning algorithms and applications. Covers neural networks, deep learning, and real-world projects.
        </p>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">Course Overview</h2>
          <p className="text-gray-600 mb-6">
            Our AI/ML course dives deep into artificial intelligence and machine learning technologies. You'll learn to build intelligent systems, develop predictive models, and implement cutting-edge AI solutions using modern frameworks and tools.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">What You'll Learn</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Artificial intelligence fundamentals and applications</li>
            <li>Machine learning algorithms and techniques</li>
            <li>Deep learning with neural networks</li>
            <li>Natural language processing (NLP)</li>
            <li>Computer vision and image recognition</li>
            <li>Reinforcement learning</li>
            <li>TensorFlow, PyTorch, and scikit-learn</li>
            <li>AI model deployment and production</li>
            <li>Ethics in AI and responsible AI practices</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Course Curriculum</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 1: AI Fundamentals</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Introduction to AI</li>
                <li>• Machine Learning Basics</li>
                <li>• Python for AI</li>
                <li>• Data Preparation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 2: Machine Learning</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Supervised Learning</li>
                <li>• Unsupervised Learning</li>
                <li>• Model Evaluation</li>
                <li>• Feature Engineering</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 3: Deep Learning</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Neural Networks</li>
                <li>• Convolutional Neural Networks</li>
                <li>• Recurrent Neural Networks</li>
                <li>• Generative AI</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 4: AI Applications</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Computer Vision</li>
                <li>• Natural Language Processing</li>
                <li>• AI Ethics and Deployment</li>
                <li>• Capstone Projects</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Prerequisites</h3>
          <p className="text-gray-600 mb-6">
            Strong programming skills (Python preferred) and basic mathematics. Understanding of statistics and linear algebra is helpful but not required.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Career Opportunities</h3>
          <p className="text-gray-600 mb-6">
            AI/ML professionals are in extreme demand. Graduates can work as AI engineers, machine learning engineers, data scientists, AI researchers, and ML specialists. Opportunities in tech giants, AI startups, research institutions, and across all industries adopting AI.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Why Choose This Course?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Cutting-edge AI and ML technologies</li>
            <li>Hands-on projects with real AI applications</li>
            <li>Expert instructors from leading AI companies</li>
            <li>Focus on practical implementation</li>
            <li>AI ethics and responsible AI development</li>
            <li>Career guidance in high-demand AI roles</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
