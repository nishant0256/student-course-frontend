import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="font-bold">Student Course System</h1>
      <div className="space-x-4">
        <Link to="/courses">Courses</Link>
        <Link to="/students">Students</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}
