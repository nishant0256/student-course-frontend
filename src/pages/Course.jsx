import { useEffect, useState } from "react";
import API from "../api/api.js";

export default function Course() {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({
    id: "",
    title: "",
    description: "",
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await API.get("/courses");
      setCourses(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Error fetching courses:", error);
      // Optionally set an error state to display to user
      setCourses([]);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitCourse = async () => {
    try {
      await API.post("/courses", {
        id: form.id,
        title: form.title,
        description: form.description,
      });
      clearForm();
      fetchCourses();
    } catch (error) {
      console.error("Error creating course:", error);
    }
  };

  const updateCourse = async () => {
    try {
      await API.put(`/courses/${editId}`, {
        title: form.title,
        description: form.description,
      });
      clearForm();
      fetchCourses();
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  const deleteCourse = async (id) => {
    await API.delete(`/courses/${id}`);
    fetchCourses();
  };

  const editCourse = (c) => {
    setEditId(c.id);
    setForm({
      id: c.id,
      title: c.title,
      description: c.description || "",
    });
  };

  const clearForm = () => {
    setForm({ id: "", title: "", description: "" });
    setEditId(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Course Management</h1>

      {/* FORM */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2>{editId ? "Update Course" : "Add Course"}</h2>

        {!editId && (
          <input
            name="id"
            placeholder="ID"
            value={form.id}
            onChange={handleChange}
            className="border p-2 mb-2 w-full"
          />
        )}

        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        />

        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        />

        <button
          onClick={editId ? updateCourse : submitCourse}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          {editId ? "Update" : "Add"}
        </button>
        <button
          onClick={clearForm}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>

      {/* COURSE LIST */}
      <div className="grid md:grid-cols-2 gap-4">
        {courses.map((c) => (
          <div key={c.id} className="bg-white p-4 rounded shadow">
            <h3>{c.id}</h3>
            <h3 className="font-bold">{c.title}</h3>
            <p>{c.description}</p>
            
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => editCourse(c)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteCourse(c.id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
