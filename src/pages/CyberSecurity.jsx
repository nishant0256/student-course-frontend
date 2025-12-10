import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import cyber from "../Image/Cyber-secu.png";


export default function CyberSecurity() {
  useEffect(() => {
 window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <Link to="/" className="inline-block mb-6 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">Back to Home</Link>
      <div className="max-w-6xl mx-auto text-center">
        <img src={cyber} alt="Cyber Security" className="h-32 w-32 mx-auto mb-6 rounded-lg" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Cyber Security Course</h1>
        <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-600">
          Learn to protect systems and data from cyber threats and vulnerabilities. Covers ethical hacking, cryptography, and incident response.
        </p>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">Course Overview</h2>
          <p className="text-gray-600 mb-6">
            Our Cyber Security course equips you with the knowledge and skills to protect digital assets, networks, and systems from cyber threats. You'll learn ethical hacking techniques, security best practices, and incident response strategies to become a cybersecurity professional.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">What You'll Learn</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Network security fundamentals and protocols</li>
            <li>Ethical hacking and penetration testing</li>
            <li>Cryptography and encryption techniques</li>
            <li>Web application security and OWASP Top 10</li>
            <li>Incident response and digital forensics</li>
            <li>Security information and event management (SIEM)</li>
            <li>Cloud security and compliance frameworks</li>
            <li>Social engineering awareness and prevention</li>
            <li>Security auditing and vulnerability assessment</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Course Curriculum</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 1: Security Fundamentals</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Introduction to Cybersecurity</li>
                <li>• Network Security Basics</li>
                <li>• Cryptography Fundamentals</li>
                <li>• Security Principles and Concepts</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 2: Ethical Hacking</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Footprinting and Reconnaissance</li>
                <li>• Scanning Networks</li>
                <li>• Enumeration and Vulnerability Assessment</li>
                <li>• System Hacking Techniques</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 3: Advanced Security</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Web Application Security</li>
                <li>• Wireless Network Security</li>
                <li>• Mobile Platform Security</li>
                <li>• IoT Security</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Module 4: Incident Response</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Digital Forensics</li>
                <li>• Incident Handling</li>
                <li>• Malware Analysis</li>
                <li>• Security Auditing</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Detailed Syllabus</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">Week 1-2: Cybersecurity Fundamentals</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Introduction to cybersecurity and its importance</li>
              <li>• Types of cyber threats and attack vectors</li>
              <li>• CIA triad: Confidentiality, Integrity, Availability</li>
              <li>• Security principles and defense-in-depth strategy</li>
              <li>• Legal and ethical considerations in cybersecurity</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 3-5: Network Security and Cryptography</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• TCP/IP protocols and network architecture</li>
              <li>• Firewalls, VPNs, and network segmentation</li>
              <li>• Cryptographic algorithms and key management</li>
              <li>• Public Key Infrastructure (PKI) and certificates</li>
              <li>• Secure communication protocols (SSL/TLS, IPsec)</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 6-8: Ethical Hacking and Penetration Testing</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Footprinting, reconnaissance, and OSINT</li>
              <li>• Network scanning and vulnerability assessment</li>
              <li>• System exploitation and privilege escalation</li>
              <li>• Web application vulnerabilities (OWASP Top 10)</li>
              <li>• Social engineering attacks and countermeasures</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 9-11: Advanced Security Topics</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Wireless network security and attacks</li>
              <li>• Mobile platform security (iOS/Android)</li>
              <li>• IoT security and embedded systems</li>
              <li>• Cloud security and container security</li>
              <li>• Database security and injection attacks</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 12-14: Incident Response and Forensics</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Incident response lifecycle and procedures</li>
              <li>• Digital forensics and evidence collection</li>
              <li>• Malware analysis and reverse engineering</li>
              <li>• Log analysis and SIEM systems</li>
              <li>• Business continuity and disaster recovery</li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-3">Week 15-16: Security Operations and Compliance</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Security operations center (SOC) operations</li>
              <li>• Compliance frameworks (GDPR, HIPAA, PCI-DSS)</li>
              <li>• Risk assessment and management</li>
              <li>• Security auditing and penetration testing reports</li>
              <li>• Career preparation and certification guidance</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Prerequisites</h3>
          <p className="text-gray-600 mb-6">
            Basic computer knowledge and understanding of networking concepts. No prior security experience required, though IT background is helpful.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Career Opportunities</h3>
          <p className="text-gray-600 mb-6">
            Cybersecurity professionals are in critical demand. Graduates can work as security analysts, penetration testers, security consultants, incident responders, and cybersecurity engineers. Opportunities in government agencies, financial institutions, tech companies, and cybersecurity firms.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-teal-600">Why Choose This Course?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Comprehensive coverage of cybersecurity domains</li>
            <li>Hands-on labs with real security tools</li>
            <li>Ethical hacking certification preparation</li>
            <li>Industry-recognized security frameworks</li>
            <li>Expert instructors with security certifications</li>
            <li>Career guidance in high-demand security roles</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
