import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Ai from "../Image/AI.png";

export default function AIML() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <Link to="/#courses" className="inline-block mb-6 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">Back to Home</Link>
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

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Detailed Syllabus</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">Week 1-2: Introduction to AI and Python</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Artificial Intelligence overview and applications</li>
              <li>• Machine learning vs deep learning concepts</li>
              <li>• Python fundamentals for data science</li>
              <li>• NumPy, Pandas, and Matplotlib libraries</li>
              <li>• Jupyter notebooks and development environment</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 3-5: Machine Learning Fundamentals</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Supervised learning: Linear and Logistic Regression</li>
              <li>• Decision Trees, Random Forests, and ensemble methods</li>
              <li>• Support Vector Machines and K-Nearest Neighbors</li>
              <li>• Model evaluation metrics and cross-validation</li>
              <li>• Feature selection and engineering techniques</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 6-8: Unsupervised Learning and Advanced ML</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Clustering algorithms: K-Means, Hierarchical</li>
              <li>• Dimensionality reduction: PCA, t-SNE</li>
              <li>• Anomaly detection and outlier analysis</li>
              <li>• Time series analysis and forecasting</li>
              <li>• Model optimization and hyperparameter tuning</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 9-11: Deep Learning with Neural Networks</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Neural network architecture and backpropagation</li>
              <li>• Convolutional Neural Networks (CNNs) for vision</li>
              <li>• Recurrent Neural Networks (RNNs) and LSTMs</li>
              <li>• Transfer learning and fine-tuning</li>
              <li>• TensorFlow and Keras frameworks</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 12-14: Computer Vision and NLP</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Image classification and object detection</li>
              <li>• Image segmentation and generative models</li>
              <li>• Text preprocessing and tokenization</li>
              <li>• Word embeddings and transformer models</li>
              <li>• Sentiment analysis and text classification</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 15-16: AI Ethics, Deployment, and Projects</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• AI ethics, bias, and responsible AI practices</li>
              <li>• Model deployment with Flask and Docker</li>
              <li>• MLOps basics and model monitoring</li>
              <li>• End-to-end AI project development</li>
              <li>• Portfolio building and career guidance</li>
            </ul>
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
