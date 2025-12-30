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
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
        >
          {/* <img
            src={logo}
            alt="Code with Nishant"
            className="h-10 transition-transform duration-300 group-hover:scale-110"
          /> */}
          <span className="font-semibold tracking-wide hidden sm:inline bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Code with Nishant
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <NavLink to="/">Home</NavLink>

          {/* {token && <NavLink to="/courses">Courses</NavLink>} */}
          {token && <NavLink to="/students">Students</NavLink>}

          {(role === "ROLE_ADMIN" || role === "ROLE_TEACHER") && (
            <>
              <NavLink to="/grades">Grades</NavLink>
              <NavLink to="/batches">Batches</NavLink>
            </>
          )}

          {(role === "ROLE_ADMIN" || role === "ROLE_TEACHER") && (
            <>
            <NavLink to="/attendance">Attendance</NavLink>
            {/* <NavLink to="/dashboard">Dashboard</NavLink> */}
            </>
            
          )}

          {(role === "ROLE_ADMIN" || role === "ROLE_TEACHER") && (
            <>
            <NavLink to="/reports">Reports</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            </>
            
          )}

          {!token ? (
            <NavLink to="/login">Login</NavLink>
          ) : (
            <>
              {/* User Badge */}
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-white/10 text-teal-300">
                {auth.getUser()} ({role?.replace("ROLE_", "")})
              </span>

              {/* Logout */}
              <button
                onClick={logout}
                className="px-4 py-1.5 rounded-full bg-gradient-to-r from-red-500 to-pink-600 text-white text-xs font-semibold shadow-md hover:shadow-red-500/40 hover:scale-105 transition-all duration-300"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

/* Reusable animated nav link */
function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="relative group text-gray-200 hover:text-white transition-colors"
    >
      {children}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-teal-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}
