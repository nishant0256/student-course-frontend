import { useEffect, useState } from "react";
import API from "../api/api";
import { toast } from "react-toastify";
import { User, Edit3, Trash2, X } from "lucide-react";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    phone: "",
    courseId: "",
  });

  // =============================
  // INITIAL LOAD
  // =============================
  useEffect(() => {
    fetchStudents();
    fetchCourses();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await API.get("/students");
      setStudents(Array.isArray(res.data) ? res.data : []);
    } catch {
      toast.error("Failed to load students");
    }
  };

  const fetchCourses = async () => {
    try {
      const res = await API.get("/courses");
      setCourses(Array.isArray(res.data) ? res.data : []);
    } catch {
      toast.error("Failed to load courses");
    }
  };

  // =============================
  // FORM HANDLING
  // =============================
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const clearForm = () => {
    setShowForm(false);
    setEditId(null);
    setForm({
      name: "",
      email: "",
      age: "",
      gender: "",
      phone: "",
      courseId: "",
    });
  };

  // =============================
  // CREATE / UPDATE
  // =============================
  const submitStudent = async () => {
    if (!form.name || !form.email || !form.gender || !form.phone || !form.courseId) {
      toast.error("All fields are required");
      return;
    }

    if (!/^\d{10}$/.test(form.phone)) {
      toast.error("Phone must be 10 digits");
      return;
    }

    const payload = {
      name: form.name,
      email: form.email,
      age: Number(form.age),
      gender: form.gender,
      phone: form.phone,
      courseId: Number(form.courseId),
    };

    try {
      if (editId) {
        await API.put(`/students/${editId}`, payload);
        toast.success("Student updated");
      } else {
        await API.post("/students", payload);
        toast.success("Student added");
      }

      clearForm();
      fetchStudents();
    } catch {
      toast.error("Operation failed");
    }
  };

  // =============================
  // EDIT / DELETE
  // =============================
  const editStudent = (s) => {
    setEditId(s.id);
    setForm({
      name: s.name,
      email: s.email,
      age: s.age,
      gender: s.gender,
      phone: s.phone,
      courseId: s.courseId || "",
    });
    setShowForm(true);
  };

  const deleteStudent = async (id) => {
    if (!window.confirm("Delete student?")) return;
    try {
      await API.delete(`/students/${id}`);
      toast.success("Student deleted");
      fetchStudents();
    } catch {
      toast.error("Delete failed");
    }
  };

  // =============================
  // FILTER
  // =============================
  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // =============================
  // UI
  // =============================
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Students Management
        </h1>

        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl
          bg-green-600 text-white font-medium shadow hover:scale-105 transition"
        >
          <User size={18} />
          Add Student
        </button>
      </div>

      {/* SEARCH */}
      <div className="flex mb-6">
        <input
          placeholder="Search by student name..."
          className="flex-1 px-4 py-3 rounded-lg border"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
  {/* HEADER */}
  <div
    className="grid grid-cols-12 px-6 py-4 bg-blue-100
    text-blue-700 font-semibold text-sm min-w-[900px]"
  >
    <div className="col-span-1">ID</div>
    <div className="col-span-3">Name</div>
    <div className="col-span-1">Age</div>
    <div className="col-span-2">Gender</div>
    <div className="col-span-2">Phone</div>
    <div className="col-span-2">Course</div>
    <div className="col-span-1 text-center">Actions</div>
  </div>

  {/* BODY */}
  {filteredStudents.length === 0 ? (
    <div className="p-6 text-center text-gray-500">
      No students found
    </div>
  ) : (
    filteredStudents.map((s) => (
      <div
        key={s.id}
        className="grid grid-cols-12 px-6 py-4 border-t
        hover:bg-gray-50 text-sm min-w-[900px] items-center"
      >
        <div className="col-span-1">{s.id}</div>

        <div className="col-span-3 font-medium">
          {s.name}
        </div>

        <div className="col-span-1">{s.age}</div>

        <div className="col-span-2">{s.gender}</div>

        <div className="col-span-2">{s.phone}</div>

        <div className="col-span-2">
          {s.courseTitle || "—"}
        </div>

        <div className="col-span-1 flex justify-center gap-3">
          <Edit3
            size={16}
            className="cursor-pointer text-yellow-600 hover:scale-110 transition"
            onClick={() => editStudent(s)}
          />
          <Trash2
            size={16}
            className="cursor-pointer text-red-600 hover:scale-110 transition"
            onClick={() => deleteStudent(s.id)}
          />
        </div>
      </div>
    ))
  )}
</div>


      {/* MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white max-w-3xl w-full rounded-xl p-8 relative">
            <button
              onClick={clearForm}
              className="absolute top-4 right-4 text-gray-400"
            >
              <X />
            </button>

            <h2 className="text-2xl font-bold mb-6">
              {editId ? "Update Student" : "Add Student"}
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {["name", "email", "age", "phone"].map((f) => (
                <input
                  key={f}
                  name={f}
                  value={form[f]}
                  onChange={handleChange}
                  placeholder={f}
                  className="border px-4 py-2 rounded"
                />
              ))}

              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="border px-4 py-2 rounded col-span-2"
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>

              <select
                name="courseId"
                value={form.courseId}
                onChange={handleChange}
                className="border px-4 py-2 rounded col-span-2"
              >
                <option value="">Select Course</option>
                {courses.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={submitStudent}
              className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
