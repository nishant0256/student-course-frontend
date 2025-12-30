import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import API from "../api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/auth";

export default function Auth() {
  const [mode, setMode] = useState("login"); // login | signup
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    try {
      if (mode === "login") {
        const res = await API.post("/auth/login", {
          username: form.email,
          password: form.password,
        });
        auth.saveToken(res.data.token);
        auth.saveUser(res.data.username);
        auth.saveRole(res.data.role);
        toast.success("Welcome back 👋");
        navigate("/");
        window.location.reload();
      } else {
        await API.post("/auth/signup", form);
        toast.success("Account created 🎉");
        setMode("login");
      }
    } catch (e) {
      toast.error(e.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] relative overflow-hidden">
      {/* Gradient blobs */}
      <div className="absolute w-96 h-96 bg-teal-500/30 rounded-full blur-3xl -top-20 -left-20" />
      <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl bottom-0 right-0" />

      <div className="relative z-10 w-full max-w-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, x: mode === "login" ? 80 : -80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: mode === "login" ? -80 : 80, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              {mode === "login" ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="text-gray-300 mb-8">
              {mode === "login"
                ? "Sign in to continue"
                : "Join us and start your journey"}
            </p>

            <div className="space-y-5">
              {mode === "signup" && (
                <Input
                  icon={<FaUser />}
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                />
              )}

              <Input
                icon={<FaEnvelope />}
                name="email"
                placeholder="Email address"
                value={form.email}
                onChange={handleChange}
              />

              <Input
                icon={<FaLock />}
                name="password"
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
              />

              <button
                onClick={submit}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold tracking-wide hover:scale-[1.02] transition-transform"
              >
                {mode === "login" ? "Sign In" : "Sign Up"}
              </button>
            </div>

            <p className="mt-6 text-center text-gray-300 text-sm">
              {mode === "login" ? (
                <>
                  Don’t have an account?{" "}
                  <button
                    onClick={() => setMode("signup")}
                    className="text-teal-400 font-semibold hover:underline"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => setMode("login")}
                    className="text-teal-400 font-semibold hover:underline"
                  >
                    Login
                  </button>
                </>
              )}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Input({ icon, ...props }) {
  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </span>
      <input
        {...props}
        className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
      />
    </div>
  );
}
