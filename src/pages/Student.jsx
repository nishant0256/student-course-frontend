import { useEffect, useState } from "react";
import API from "../api/api";
import { toast } from "react-toastify";

export default function Student() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    id: "",
    name: "",
    email: "",
    age: "",
    gender: "",
    phone: "",
    selectedCourses: [],
  });

  useEffect(() => {
    fetchStudents();
    fetchCourses();
  }, []);

  // ✅ FETCH
  const fetchStudents = async () => {
    const res = await API.get("/students");
    setStudents(res.data || []);
  };

  const fetchCourses = async () => {
    const res = await API.get("/courses");
    setCourses(res.data || []);
  };

  // ✅ INPUT CHANGE
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // ✅ COURSE SELECT (MAX 2)
  const handleCourseSelect = (e) => {
    const selected = Array.from(
      e.target.selectedOptions,
      (opt) => Number(opt.value)
    );

    if (selected.length > 2) {
      toast.error("You can select only 2 courses");
      return;
    }

    setForm((prev) => ({
      ...prev,
      selectedCourses: selected,
    }));
  };

  // ✅ VALIDATION
  const validateForm = () => {
    if (!form.name || !form.email || !form.age) {
      toast.error("Name, Email & Age are required");
      return false;
    }

    if (form.selectedCourses.length !== 2) {
      toast.error("Please select exactly 2 courses");
      return false;
    }

    return true;
  };

  // ✅ ADD / UPDATE STUDENT
  const submitStudent = async () => {
    if (!validateForm()) return;

    try {
      if (editId) {
        // ✅ UPDATE BASIC DETAILS
        await API.put(`/students/${editId}`, {
          name: form.name,
          email: form.email,
          age: Number(form.age),
          gender: form.gender,
          phone: form.phone,
        });

        // ✅ UPDATE COURSES (ENROLL NEW ONES)
        const existingStudent = students.find((s) => s.id === editId);
        const existingCourseIds =
          existingStudent?.courses?.map((c) => c.id) || [];

        const newCourseIds = form.selectedCourses.filter(
          (id) => !existingCourseIds.includes(id)
        );

        for (const courseId of newCourseIds) {
          await API.post("/students/enroll", {
            studentId: editId,
            courseId,
          });
        }

        toast.success("Student & courses updated successfully");
      } else {
        // ✅ CREATE + ENROLL
        await API.post("/students", {
          id: form.id,
          name: form.name,
          email: form.email,
          age: Number(form.age),
          gender: form.gender,
          phone: form.phone,
          courses: form.selectedCourses.map((id) => ({ id })),
        });

        toast.success("Student added & enrolled successfully");
      }

      clearForm();
      fetchStudents();
    } catch (err) {
      toast.error(err.response?.data?.message || "Operation failed");
    }
  };

  // ✅ EDIT STUDENT
  const editStudent = (s) => {
    setEditId(s.id);
    setForm({
      id: s.id,
      name: s.name,
      email: s.email,
      age: s.age,
      gender: s.gender || "",
      phone: s.phone || "",
      selectedCourses: s.courses?.map((c) => c.id) || [],
    });
  };

  // ✅ DELETE STUDENT
  const deleteStudent = async (id) => {
    if (!confirm("Are you sure?")) return;
    await API.delete(`/students/${id}`);
    toast.success("Student deleted");
    fetchStudents();
  };

  // ✅ CLEAR
  const clearForm = () => {
    setForm({
      id: "",
      name: "",
      email: "",
      age: "",
      gender: "",
      phone: "",
      selectedCourses: [],
    });
    setEditId(null);
  };

  return (
    <div className="p-6 space-y-6">

      {/* ✅ FORM */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">
          {editId ? "Update Student & Courses" : "Add Student & Enroll"}
        </h2>

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
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        />

        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        >
          <option value="">Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        {/* ✅ COURSE SELECT (MAX 2) */}
        <select
          multiple
          value={form.selectedCourses}
          onChange={handleCourseSelect}
          className="border p-2 mb-4 w-full"
        >
          {courses.map((c) => (
            <option
              key={c.id}
              value={c.id}
              disabled={
                form.selectedCourses.length === 2 &&
                !form.selectedCourses.includes(c.id)
              }
            >
              {c.title}
            </option>
          ))}
        </select>

        {/* ✅ ONE BUTTON */}
        <button
          onClick={submitStudent}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
        >
          {editId ? "Update Student" : "Add & Enroll Student"}
        </button>

        <button
          onClick={clearForm}
          className="ml-3 bg-gray-400 text-white px-6 py-2 rounded"
        >
          Cancel
        </button>
      </div>

      {/* ✅ STUDENT LIST */}
      <div className="grid md:grid-cols-2 gap-4">
        {students.map((s) => (
          <div key={s.id} className="bg-white p-4 rounded shadow">
            <h3>{s.id}</h3>
            <h3 className="font-bold">{s.name}</h3>
            <p>Email: {s.email}</p>
            <p>
              Courses: {s.courses?.map((c) => c.title).join(", ")}
            </p>

            <div className="flex gap-2 mt-2">
              <button
                onClick={() => editStudent(s)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteStudent(s.id)}
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
