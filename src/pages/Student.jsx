import { useEffect, useState } from "react";
import API from "../api/api";

export default function Student() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  const [id, setId] = useState('');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [editId, setEditId] = useState(null);

  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchStudents();
    fetchCourses();
  }, []);

  // ===== API CALLS =====
  const fetchStudents = async () => {
    const res = await API.get("/students");
    setStudents(res.data);
  };

  const fetchCourses = async () => {
    const res = await API.get("/courses");
    setCourses(res.data);
  };

  const addStudent = async () => {
    await API.post("/students", {
      id,
      name,
      email,
      age,
    });
    clearForm();
    fetchStudents();
  };

  const updateStudent = async () => {
    await API.put(`/students/${editId}`, {
      name,
      email,
      age,
    });
    clearForm();
    fetchStudents();
  };

  const deleteStudent = async (id) => {
    await API.delete(`/students/${id}`);
    fetchStudents();
  };

  const enrollStudent = async () => {
    await API.post("/students/enroll", {
      studentId: selectedStudent,
      courseId: selectedCourse,
    });
    fetchStudents();
  };

  // ===== HELPERS =====
  const editStudent = (s) => {
    setEditId(s.id);
    setName(s.name);
    setEmail(s.email);
    setAge(s.age);
  };

  const clearForm = () => {
    setId('');
    setName("");
    setEmail("");
    setAge("");
    setEditId(null);
  };

  // ===== FILTERED STUDENTS =====
  const filteredStudents = students
    .filter(s => s.name.toLowerCase().startsWith(searchQuery.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  // ===== UI =====
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Student Management</h2>

      {/* ADD / UPDATE */}
      <div className="mb-6">
        <input className="border p-2 mr-2"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          className="border p-2 mr-2"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-2 mr-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border p-2 mr-2"
          placeholder="Age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        {editId ? (
          <button
            onClick={editStudent}
            className="bg-green-600 text-white px-4 py-2"
          >
            Update
          </button>
        ) : (
          <button
            onClick={addStudent}
            className="bg-blue-600 text-white px-4 py-2"
          >
            Add
          </button>
        )}
      </div>

      {/* ENROLL STUDENT */}
      <div className="mb-8">
        <h3 className="font-semibold mb-2">Enroll Student to Course</h3>
        <select
          className="border p-2 mr-2"
          onChange={(e) => setSelectedStudent(e.target.value)}
        >
          <option value="">Select Student</option>
          {students.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>

        <select
          className="border p-2 mr-2"
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          <option value="">Select Course</option>
          {courses.map((c) => (
            <option key={c.id} value={c.id}>
              {c.title}
            </option>
          ))}
        </select>

        <button
          onClick={enrollStudent}
          className="bg-purple-600 text-white px-4 py-2"
        >
          Enroll
        </button>
      </div>

      {/* SEARCH BAR */}
      <div className="mb-4">
        <input
          className="border p-2 w-full"
          placeholder="Search students by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* STUDENT LIST */}
      <ul>
        {filteredStudents.map((s) => (
          <li
            key={s.id}
            className="border p-4 mb-3 flex justify-between"
          >
            <div>
              <p className="font-semibold">
                {s.id}. {s.name} ({s.age})
              </p>
              <p className="text-sm text-gray-600">{s.email}</p>

            
            </div>

            <div>
              <button
                onClick={() => editStudent(s)}
                className="bg-yellow-500 text-white px-3 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => deleteStudent(s.id)}
                className="bg-red-600 text-white px-3"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
