import { useState } from "react";
import API from "../api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/auth";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    try {
      const res = await API.post("/auth/login", form);
      const { token, username, role } = res.data;
      auth.saveToken(token);
      auth.saveUser(username);
      auth.saveRole(role);
      toast.success("Logged in");
      navigate("/");
      window.location.reload(); // to update navbar
    } catch (e) {
      toast.error(e.response?.data?.message || e.message || "Login failed");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input name="username" placeholder="Username" className="border p-2 mb-2 w-full" value={form.username} onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" className="border p-2 mb-2 w-full" value={form.password} onChange={handleChange} />
      <button onClick={submit} className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
    </div>
  );
}
