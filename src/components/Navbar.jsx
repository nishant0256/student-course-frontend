import { Link } from "react-router-dom";
import logo from "../Image/logo.png";
export default function Navbar() {
  return (
    <nav className="bg-black p-4 text-white flex justify-between items-center sticky
     top-0 z-50">
      <img src={logo} alt="Code with Nishant" className="h-10 " />
      <div className="space-x-4 flex items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/courses" className="hover:underline">Courses</Link>
        {/* <Link to="/programming" className="hover:underline">Programming</Link> */}
        {/* <Link to="/web-development" className="hover:underline">Web Development</Link>
        <Link to="/data-science" className="hover:underline">Data Science</Link>
        <Link to="/cloud-computing" className="hover:underline">Cloud Computing</Link>
        <Link to="/cyber-security" className="hover:underline">Cyber Security</Link>
        <Link to="/devops" className="hover:underline">DevOps</Link>
        <Link to="/ai-ml" className="hover:underline">AI/ML</Link>
        <Link to="/mobile-app-development" className="hover:underline">Mobile App Development</Link>
        <Link to="/database-management" className="hover:underline">Database Management</Link>
        {/* <Link to="/placements" className="hover:underline">Placements</Link> */}
        {/* <Link to="/projects" className="hover:underline">Projects</Link> */}
        <Link to="/students" className="hover:underline">Students</Link>
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/about" className="hover:underline">About Us</Link>
        <Link to="/contact" className="hover:underline">Contact Us</Link>
        {/* <Link to="/blogs" className="hover:underline">Blogs</Link> */}
      </div>
    </nav>
  );
}
