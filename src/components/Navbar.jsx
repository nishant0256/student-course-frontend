import { Link, useNavigate } from "react-router-dom";
import logo from "../Image/logo.png";
import { auth } from "../auth/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const token = auth.getToken();
  const role = auth.getRole();

  const logout = () => {
    auth.clear();
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className="bg-black p-4 text-white flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-3">
        <img src={logo} alt="Code with Nishant" className="h-10" />
        <span className="font-semibold hidden sm:inline">Code with Nishant</span>
      </Link>

      <div className="space-x-4 flex items-center text-sm">
        <Link to="/" className="hover:underline">Home</Link>
        {token && <Link to="/courses" className="hover:underline">Courses</Link>}
        {token && <Link to="/students" className="hover:underline">Students</Link>}
        {(role === "ROLE_ADMIN" || role === "ROLE_TEACHER") && <Link to="/grades" className="hover:underline">Grades</Link>}
        {(role === "ROLE_ADMIN" || role === "ROLE_TEACHER") && <Link to="/attendance" className="hover:underline">Attendance</Link>}
        {(role === "ROLE_ADMIN" || role === "ROLE_TEACHER") && <Link to="/reports" className="hover:underline">Reports</Link>}
        {!token ? (
          <Link to="/login" className="hover:underline">Login</Link>
        ) : (
          <>
            <span className="text-xs px-2 py-1 bg-gray-800 rounded">{auth.getUser()} ({role?.replace('ROLE_', '')})</span>
            <button onClick={logout} className="bg-red-600 px-3 py-1 rounded">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}
