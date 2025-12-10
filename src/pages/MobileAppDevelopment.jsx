import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import mobile from "../Image/Mobile.png";

export default function MobileAppDevelopment() {
  useEffect(() => {
     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <Link to="/" className="inline-block mb-6 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">Back to Home</Link>
      <div className="max-w-6xl mx-auto text-center">
        <img src={mobile} alt="Mobile App Development" className="h-32 w-32 mx-auto mb-6 rounded-lg" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Mobile App Development Course</h1>
        <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-600">
          Build mobile applications for Android and iOS platforms using modern frameworks like React Native and Flutter.
        </p>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">Course Overview</h2>
          <p className="text-gray-600 mb-6">
            Our Mobile App Development course teaches you to create native and cross-platform mobile applications. You'll learn modern frameworks and tools to build engaging mobile experiences for iOS and Android platforms, from concept to deployment in app stores.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">What You'll Learn</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Mobile app development fundamentals</li>
            <li>React Native for cross-platform development</li>
            <li>Flutter and Dart for hybrid applications</li>
            <li>Native iOS development with Swift</li>
            <li>Native Android development with Kotlin</li>
            <li>Mobile UI/UX design principles</li>
            <li>API integration and backend services</li>
            <li>App store deployment and monetization</li>
            <li>Mobile app testing and debugging</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Course Curriculum</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 1: Mobile Fundamentals</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Mobile App Ecosystem</li>
                <li>• UI/UX Design Principles</li>
                <li>• Mobile Development Tools</li>
                <li>• App Store Guidelines</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 2: React Native</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• React Native Basics</li>
                <li>• Components and Navigation</li>
                <li>• State Management</li>
                <li>• API Integration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 3: Flutter Development</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Dart Programming</li>
                <li>• Flutter Widgets</li>
                <li>• Material Design</li>
                <li>• Firebase Integration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 4: Native Development</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• iOS with Swift</li>
                <li>• Android with Kotlin</li>
                <li>• Platform-Specific Features</li>
                <li>• App Deployment</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Detailed Syllabus</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">Week 1-2: Mobile App Fundamentals</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Mobile app ecosystem and market overview</li>
              <li>• Mobile UI/UX design principles and best practices</li>
              <li>• Development environments setup (Android Studio, Xcode)</li>
              <li>• App store guidelines and submission processes</li>
              <li>• Mobile app monetization strategies</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 3-5: React Native Development</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• React Native fundamentals and architecture</li>
              <li>• Components, props, and state management</li>
              <li>• Navigation with React Navigation</li>
              <li>• Redux and Context API for state management</li>
              <li>• API integration and data fetching</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 6-8: Flutter and Dart Programming</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Dart programming language fundamentals</li>
              <li>• Flutter widgets and material design</li>
              <li>• State management with Provider and Bloc</li>
              <li>• Firebase integration for backend services</li>
              <li>• Platform-specific code and plugins</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 9-11: Native iOS Development</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Swift programming and iOS fundamentals</li>
              <li>• UIKit and SwiftUI for interface design</li>
              <li>• Core Data for local data persistence</li>
              <li>• iOS APIs and device features integration</li>
              <li>• App Store deployment and TestFlight</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 12-14: Native Android Development</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Kotlin programming for Android</li>
              <li>• Android Jetpack components and architecture</li>
              <li>• Room database and data persistence</li>
              <li>• Android APIs and device features</li>
              <li>• Google Play Store deployment</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 15-16: Advanced Topics and Projects</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Cross-platform app development strategies</li>
              <li>• App performance optimization and testing</li>
              <li>• Push notifications and background services</li>
              <li>• App security and user authentication</li>
              <li>• Portfolio app development and deployment</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Prerequisites</h3>
          <p className="text-gray-600 mb-6">
            Basic programming knowledge (JavaScript recommended for React Native). No prior mobile development experience required.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Career Opportunities</h3>
          <p className="text-gray-600 mb-6">
            Mobile app developers are in high demand. Graduates can work as mobile app developers, React Native developers, Flutter developers, iOS/Android developers, and freelance app developers. Opportunities in app development agencies, tech companies, and startups.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Why Choose This Course?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Learn multiple mobile development frameworks</li>
            <li>Build and publish real mobile apps</li>
            <li>Cross-platform and native development skills</li>
            <li>Industry-standard tools and best practices</li>
            <li>Portfolio development with published apps</li>
            <li>Mentorship from experienced mobile developers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
