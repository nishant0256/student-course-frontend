import { useEffect, useState } from "react";
import API from "../api/api";

export default function Course() {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  // ===== API CALLS =====
  const fetchCourses = async () => {
    const res = await API.get("/courses");
    setCourses(res.data);
  };

  const addCourse = async () => {
    if (!title || !description) return;

    await API.post("/courses", {
      id,
      title,
      description,
    });

    clearForm();
    fetchCourses();
  };

  const updateCourse = async () => {
    await API.put(`/courses/${editId}`, {
      title,
      description,
    });

    clearForm();
    fetchCourses();
  };

  const deleteCourse = async (id) => {
    await API.delete(`/courses/${id}`);
    fetchCourses();
  };

  // ===== HELPERS =====
  const editCourse = (course) => {
    setTitle(course.title);
    setDescription(course.description);
    setEditId(course.id);
  };

  const clearForm = () => {
    setId("");
    setTitle("");
    setDescription("");
    setEditId(null);
  };

  const filteredCourses = courses
    .filter(course =>
      course.title.toLowerCase().startsWith(searchQuery.toLowerCase()) || searchQuery === ""
    )
    .sort((a, b) => a.title.localeCompare(b.title));

  // ===== UI =====
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Course Management</h2>

      {/* ADD / UPDATE COURSE */}
      <div className="mb-6">
        <input
          className="border p-2 mr-2 w-40"
          placeholder="Course ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          className="border p-2 mr-2 w-60"
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="border p-2 mr-2 w-80"
          placeholder="Course Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {editId ? (
          <button
            onClick={updateCourse}
            className="bg-green-600 text-white px-4 py-2 mr-2"
          >
            Update
          </button>
        ) : (
          <button
            onClick={addCourse}
            className="bg-blue-600 text-white px-4 py-2"
          >
            Add
          </button>
        )}

        {editId && (
          <button
            onClick={clearForm}
            className="bg-gray-500 text-white px-4 py-2"
          >
            Cancel
          </button>
        )}
      </div>

      {/* SEARCH BAR */}
      <input
        className="border p-2 w-full mb-4"
        placeholder="Search courses by title"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* COURSE LIST */}
      <ul>
        {filteredCourses.map((c) => (
          <li
            key={c.id}
            className="border p-4 mb-3 flex justify-between rounded-md"
          >
            <div>
              <p className="font-semibold text-lg">{c.title}</p>
              <p className="text-sm text-gray-500 mb-1">ID: {c.id}</p>
              <p className="text-sm text-gray-600">{c.description}</p>

              <p className="text-sm mt-1">
                <span className="font-medium">Students:</span>
                {c.students?.length
                  ? " " + c.students.map((s) => s.name).join(", ")
                  : " None"}
              </p>
            </div>

            <div className="flex items-center">
              <button
                onClick={() => editCourse(c)}
                className="bg-yellow-500 text-white px-3 py-1 mr-2 rounded"
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
          </li>
        ))}
      </ul>

      {/* EMPTY STATE */}
      {filteredCourses.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          {search ? "No courses match the search." : "No courses available."}
        </p>
      )}
    </div>
  );
}
