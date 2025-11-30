import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black p-4 text-white flex justify-between items-center">
      <img src="https://via.placeholder.com/150x50/000000/ffffff?text=MindScripts+Tech" alt="MindScripts Tech" className="h-10" />
      <div className="space-x-4 flex items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/courses" className="hover:underline">Courses</Link>
        {/* <Link to="/placements" className="hover:underline">Placements</Link> */}
        <Link to="/projects" className="hover:underline">Projects</Link>
        <Link to="/students" className="hover:underline">Students</Link>
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/about" className="hover:underline">About Us</Link>
        <Link to="/contact" className="hover:underline">Contact Us</Link>
        {/* <Link to="/blogs" className="hover:underline">Blogs</Link> */}
      </div>
    </nav>
  );
}
