import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import data from "../Image/data_science.png";

export default function DataScience() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <Link to="/#courses" className="inline-block mb-6 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">Back to Home</Link>
      <div className="max-w-6xl mx-auto text-center">
        <img src={data} alt="Data Science" className="h-32 w-32 mx-auto mb-6 rounded-lg" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Data Science Course</h1>
        <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-600">
          Dive into data analysis, machine learning, and AI with hands-on projects. Learn tools like Python, R, Pandas, and TensorFlow.
        </p>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">Course Overview</h2>
          <p className="text-gray-600 mb-6">
            Our Data Science course is designed to equip you with the skills to extract insights from data, build predictive models, and drive data-driven decision-making. From statistical analysis to advanced machine learning techniques, this course covers the entire data science pipeline using industry-standard tools and real-world datasets.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">What You'll Learn</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Statistical analysis and probability concepts</li>
            <li>Data manipulation and visualization with Python and R</li>
            <li>Machine learning algorithms: regression, classification, clustering</li>
            <li>Deep learning with TensorFlow and neural networks</li>
            <li>Big data processing with Hadoop and Spark</li>
            <li>Data engineering and ETL processes</li>
            <li>Model deployment and production systems</li>
            <li>Business intelligence and data storytelling</li>
            <li>Ethical considerations in data science</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Course Curriculum</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 1: Foundations of Data Science</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Introduction to Data Science</li>
                <li>• Statistics and Probability</li>
                <li>• Data Collection and Cleaning</li>
                <li>• Exploratory Data Analysis</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 2: Programming for Data Science</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Python for Data Analysis</li>
                <li>• R Programming</li>
                <li>• Pandas and NumPy</li>
                <li>• Data Visualization</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 3: Machine Learning</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Supervised Learning</li>
                <li>• Unsupervised Learning</li>
                <li>• Model Evaluation</li>
                <li>• Feature Engineering</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 4: Advanced Topics</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Deep Learning</li>
                <li>• Big Data Technologies</li>
                <li>• Model Deployment</li>
                <li>• Capstone Project</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Detailed Syllabus</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">Week 1-2: Introduction and Foundations</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Overview of Data Science lifecycle</li>
              <li>• Descriptive and Inferential Statistics</li>
              <li>• Hypothesis Testing and Confidence Intervals</li>
              <li>• Data Wrangling with Python</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 3-5: Data Processing and Visualization</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Advanced Pandas operations</li>
              <li>• Matplotlib, Seaborn, and Plotly for visualization</li>
              <li>• Handling missing data and outliers</li>
              <li>• SQL for data querying</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 6-9: Machine Learning Fundamentals</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Linear and Logistic Regression</li>
              <li>• Decision Trees and Random Forests</li>
              <li>• SVM and K-Nearest Neighbors</li>
              <li>• Clustering: K-Means, Hierarchical</li>
              <li>• Dimensionality Reduction: PCA</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 10-12: Advanced Machine Learning</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Ensemble Methods: Bagging, Boosting</li>
              <li>• Time Series Analysis</li>
              <li>• Natural Language Processing Basics</li>
              <li>• Model Selection and Hyperparameter Tuning</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 13-15: Deep Learning and Big Data</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Neural Networks with Keras/TensorFlow</li>
              <li>• CNNs for Image Data</li>
              <li>• RNNs and LSTMs for Sequential Data</li>
              <li>• Introduction to Spark and Hadoop</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 16: Capstone and Deployment</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• End-to-End Project Development</li>
              <li>• Model Deployment with Flask/Docker</li>
              <li>• MLOps Basics</li>
              <li>• Presentation and Review</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Prerequisites</h3>
          <p className="text-gray-600 mb-6">
            Basic programming knowledge (preferably Python) and familiarity with mathematics (algebra, calculus) are recommended. No prior data science experience required.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Career Opportunities</h3>
          <p className="text-gray-600 mb-6">
            Graduates can pursue careers as data scientists, machine learning engineers, data analysts, business intelligence analysts, and more. The demand for data science skills spans across industries including technology, finance, healthcare, retail, and consulting.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Why Choose This Course?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Comprehensive curriculum covering the full data science pipeline</li>
            <li>Hands-on projects with real-world datasets</li>
            <li>Expert instructors with industry experience</li>
            <li>Focus on practical applications and business impact</li>
            <li>Certificate recognized by leading companies</li>
            <li>Career support and job placement assistance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
