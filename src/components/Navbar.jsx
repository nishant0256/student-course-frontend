import { Link } from "react-router-dom";
import logo from "../Image/logo.png";
export default function Navbar() {
  return (
    <nav
      className="bg-black p-4 text-white flex justify-between items-center sticky
     top-0 z-50"
    >
      <Link to="/" className="hover:underline">
        <img src={logo} alt="Code with Nishant" className="h-10 " />
      </Link>

      <div className="space-x-4 flex items-center">
        <Link to="/" className="hover:underline">
          Home
        </Link>
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
        <Link to="/login" className="hover:underline">
          Login
        </Link>
      </div>
    </nav>
  );
}
