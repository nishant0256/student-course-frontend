import { useEffect, useState } from "react";
import API from "../api/api";
import { toast } from "react-toastify";
import { BookOpen, Edit3, Trash2, Search as SearchIcon, X } from "lucide-react";

export default function Course() {
  const [courses, setCourses] = useState([]);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [form, setForm] = useState({
    id: "",
    title: "",
    description: "",
    credits: "",
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  // ================= FETCH =================
  const fetchCourses = async () => {
    try {
      setLoading(true);
      const res = await API.get("/courses");
      setCourses(Array.isArray(res.data) ? res.data : []);
    } catch {
      toast.error("Failed to load courses");
    } finally {
      setLoading(false);
    }
  };

  // ================= FORM =================
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submitCourse = async () => {
  if (!form.title || !form.credits) {
    toast.error("Title & Credits are required");
    return;
  }

  try {
    await API.post("/courses", {
      title: form.title,
      description: form.description,
      credits: Number(form.credits), // ✅ CRITICAL
    });
    toast.success("Course added");
    clearForm();
    fetchCourses();
  } catch {
    toast.error("Add failed");
  }
};


  const updateCourse = async () => {
  if (!form.title || !form.credits) {
    toast.error("Title & Credits are required");
    return;
  }

  try {
    await API.put(`/courses/${editId}`, {
      title: form.title,
      description: form.description,
      credits: Number(form.credits), // ✅ CRITICAL
    });
    toast.success("Course updated");
    clearForm();
    fetchCourses();
  } catch {
    toast.error("Update failed");
  }
};


  const deleteCourse = async (id) => {
    if (!confirm("Delete course?")) return;
    await API.delete(`/courses/${id}`);
    fetchCourses();
  };

  const editCourse = (c) => {
    setEditId(c.id);
    setForm({
      id: c.id,
      title: c.title,
      description: c.description || "",
      credits: c.credits ?? "",
    });
    setShowForm(true);
  };

  const clearForm = () => {
    setForm({ id: "", title: "", description: "", credits: "" });
    setEditId(null);
    setShowForm(false);
  };

  const filteredCourses = courses.filter((c) =>
    c.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ================= UI =================
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-800">
          Course Management
        </h1>

        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl
          bg-gradient-to-r from-emerald-500 to-green-600
          text-white font-medium shadow-lg hover:shadow-xl
          hover:scale-[1.03] transition"
        >
          <BookOpen size={18} />
          Add Course
        </button>
      </div>

      {/* SEARCH */}
      <div className="relative mb-8">
        <SearchIcon
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          placeholder="Search course..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-11 pr-4 py-3 rounded-xl border
          bg-white shadow-sm focus:outline-none
          focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* FORM MODAL (Matched with Student.jsx) */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm
        flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-3xl rounded-2xl
          p-8 shadow-2xl relative">
            <button
              onClick={clearForm}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700"
            >
              <X />
            </button>

            <h2 className="text-2xl font-semibold mb-6">
              {editId ? "Update Course" : "Add Course"}
            </h2>

            <input
              name="title"
              placeholder="Course Title"
              value={form.title}
              onChange={handleChange}
              className="w-full px-4 py-3 mb-4 rounded-xl border
              focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <input
              type="number"
              name="credits"
              placeholder="Credits"
              value={form.credits}
              onChange={handleChange}
              min={1}
              className="w-full px-4 py-3 mb-4 rounded-xl border
  focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />


            <textarea
              name="description"
              placeholder="Course Description"
              value={form.description}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 rounded-xl border
              focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <div className="flex justify-end gap-3 mt-8">
              <button
                onClick={clearForm}
                className="px-5 py-2 rounded-xl
                bg-gray-100 hover:bg-gray-200 transition"
              >
                Cancel
              </button>

              <button
                onClick={editId ? updateCourse : submitCourse}
                className="px-6 py-2 rounded-xl text-white font-medium
                bg-gradient-to-r from-emerald-500 to-green-600
                shadow hover:shadow-lg transition"
              >
                {editId ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* COURSE LIST (Matched cards) */}
      <div className="grid md:grid-cols-3 gap-6">
        {loading ? (
          <p className="col-span-full text-center text-gray-500">
            Loading...
          </p>
        ) : filteredCourses.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No courses found
          </p>
        ) : (
          filteredCourses.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-2xl p-5 border
              shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
            >
              <h3 className="font-semibold text-lg">{c.title}</h3>
              <p className="text-sm text-gray-500 mt-1">
                {c.description || "No description"}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Fees: {c.credits}
              </p>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => editCourse(c)}
                  className="p-2 rounded-lg bg-yellow-100
                  text-yellow-700 hover:bg-yellow-200 transition"
                >
                  <Edit3 size={14} />
                </button>

                <button
                  onClick={() => deleteCourse(c.id)}
                  className="p-2 rounded-lg bg-red-100
                  text-red-600 hover:bg-red-200 transition"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
