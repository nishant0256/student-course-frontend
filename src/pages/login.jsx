import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/auth";
import { FaEnvelope, FaLock, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import cloud from "../Image/cloud.png";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "", rememberMe: false });
  const navigate = useNavigate();

  
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleCheckboxChange = (e) => {
    setForm({ ...form, rememberMe: e.target.checked });
  };

  const submit = async () => {
    try {
      const payload = {
        username: form.email, // backend expects username
        password: form.password,
      };
      const res = await API.post("/auth/login", payload);
      const { token, username, role } = res.data;
      auth.saveToken(token);
      auth.saveUser(username);
      auth.saveRole(role);
      if (form.rememberMe) {
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("rememberMe");
      }
      toast.success("Logged in");
      navigate("/");
      window.location.reload(); // to update navbar
    } catch (e) {
      toast.error(e.response?.data?.message || e.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row bg-gradient-to-br from-teal-600 via-teal-700 to-blue-700 text-white rounded-xl shadow-xl overflow-hidden">
          {/* Left Side: Welcome */}
          <div className="flex-1 p-12 flex flex-col justify-center relative" style={{ backgroundImage: `url(${cloud})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative z-10 max-w-sm mx-auto">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-teal-200 to-white bg-clip-text text-transparent">Welcome</h1>
              <p className="text-teal-100 text-lg mb-10">Enter your details to sign in to your account</p>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-opacity-30 transition-opacity">
                  <FaTwitter className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-opacity-30 transition-opacity">
                  <FaFacebook className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-opacity-30 transition-opacity">
                  <FaInstagram className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
          {/* Right Side: Form */}
          <div className="flex-1 p-12 bg-white">
            <div className="max-w-md mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Sign in</h2>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); submit(); }}>
                <div className="relative">
                  <label htmlFor="email" className="sr-only">Email</label>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    required
                    className="block w-full pl-10 pr-3 py-4 border-2 border-gray-200 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/20 transition-all duration-300 bg-gray-50"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <label htmlFor="password" className="sr-only">Password</label>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="block w-full pl-10 pr-3 py-4 border-2 border-gray-200 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/20 transition-all duration-300 bg-gray-50"
                    placeholder="Enter password"
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="rememberMe"
                      name="rememberMe"
                      type="checkbox"
                      className="h-5 w-5 text-teal-600 focus:ring-teal-500 border-gray-300 rounded focus:outline-none transition-all duration-300"
                      checked={form.rememberMe}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="rememberMe" className="ml-3 block text-sm font-medium text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <Link to="/forgot-password" className="font-medium text-teal-600 hover:text-teal-500 transition-colors">
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-4 px-6 border border-transparent text-base font-semibold rounded-xl text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 shadow-md transform hover:scale-105 transition-all duration-300"
                  >
                    Sign in now
                  </button>
                </div>
              </form>
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link to="/signup" className="font-semibold text-teal-600 hover:text-teal-500 hover:underline transition-colors">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
