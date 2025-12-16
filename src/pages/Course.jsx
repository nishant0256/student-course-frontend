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
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const res = await API.get("/courses");
      setCourses(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      toast.error("Failed to load courses");
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submitCourse = async () => {
    if (!form.title) {
      toast.error("Title is required");
      return;
    }

    try {
      await API.post("/courses", {
        id: form.id,
        title: form.title,
        description: form.description,
      });
      toast.success("Course added successfully");
      clearForm();
      fetchCourses();
    } catch (error) {
      toast.error("Failed to add course");
      console.error("Error creating course:", error);
    }
  };

  const updateCourse = async () => {
    if (!form.title) {
      toast.error("Title is required");
      return;
    }

    try {
      await API.put(`/courses/${editId}`, {
        title: form.title,
        description: form.description,
      });
      toast.success("Course updated successfully");
      clearForm();
      fetchCourses();
    } catch (error) {
      toast.error("Failed to update course");
      console.error("Error updating course:", error);
    }
  };

  const deleteCourse = async (id) => {
    if (!confirm("Are you sure?")) return;
    try {
      await API.delete(`/courses/${id}`);
      toast.success("Course deleted");
      fetchCourses();
    } catch (e) {
      toast.error("Delete failed");
    }
  };

  const editCourse = (c) => {
    setEditId(c.id);
    setForm({
      id: c.id,
      title: c.title,
      description: c.description || "",
    });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clearForm = () => {
    setForm({ id: "", title: "", description: "" });
    setEditId(null);
    setShowForm(false);
  };

  const toggleForm = () => setShowForm(!showForm);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Course Management</h1>
        <button
          onClick={toggleForm}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          Open Form
          <BookOpen size={20} />
        </button>
      </div>

      {/* Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search by title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        <button
          onClick={() => setSearchTerm("")}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
        >
          Search
          <SearchIcon size={20} />
        </button>
      </div>

      {/* FORM */}
      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 relative">
          <button
            onClick={toggleForm}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
          <h2 className="text-xl font-semibold mb-4">
            {editId ? "Update Course" : "Add Course"}
          </h2>

          

          <input
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-3"
          />

          <input
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-3"
          />

          <div className="flex items-center gap-3">
            <button
              onClick={editId ? updateCourse : submitCourse}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors flex-1"
            >
              {editId ? "Update Course" : "Add Course"}
            </button>

            <button
              onClick={clearForm}
              className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* COURSE LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          <div className="col-span-full text-center py-8 text-gray-500">Loading courses...</div>
        ) : filteredCourses.length === 0 ? (
          <div className="col-span-full text-center py-8 text-gray-500">No courses found</div>
        ) : (
          filteredCourses.map((c) => {
            const initials = c.title.charAt(0).toUpperCase();
            return (
              <div key={c.id} className="bg-white p-4 rounded-lg border-2 border-green-500 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold text-base">
                      {initials}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{c.title}</h3>
                    </div>
                  </div>
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Course #{c.id}
                  </span>
                </div>
                <div className="space-y-1 mb-3">
                  <div className="flex items-center gap-1.5 text-xs text-gray-700">
                    <BookOpen size={14} className="text-green-600 flex-shrink-0" />
                    <span>Description: {c.description || "No description"}</span>
                  </div>
                </div>
                <div className="flex justify-end gap-1">
                  <button
                    onClick={() => editCourse(c)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1.5 rounded-md transition-colors flex items-center gap-1 text-sm"
                  >
                    <Edit3 size={14} />
                    Edit
                  </button>
                  <button
                    onClick={() => deleteCourse(c.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-md transition-colors flex items-center gap-1 text-sm"
                  >
                    <Trash2 size={14} />
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
