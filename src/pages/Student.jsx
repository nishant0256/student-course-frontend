import { useEffect, useState } from "react";
import API from "../api/api";
import { toast } from "react-toastify";
import { Phone, Mail, Edit3, Trash2, Search as SearchIcon, User, X, Calendar, BookOpen } from "lucide-react";

export default function Student() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [enrollFilter, setEnrollFilter] = useState("all");
  const [createdDate, setCreatedDate] = useState("");

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

  // FETCH
  const fetchStudents = async () => {
    try {
      setLoading(true);
      const res = await API.get("/students");
      setStudents(res.data || []);
    } catch (e) {
      toast.error("Failed to load students");
    } finally {
      setLoading(false);
    }
  };

  const fetchCourses = async () => {
    try {
      const res = await API.get("/courses");
      setCourses(res.data || []);
    } catch (e) {
      toast.error("Failed to load courses");
    }
  };

  // INPUT CHANGE
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // COURSE SELECT (MAX 2) with disabling others
  const handleCourseSelect = (e) => {
    const selected = Array.from(
      e.target.selectedOptions,
      (opt) => Number(opt.value)
    );

    if (selected.length > 2) {
      toast.error("You can select only 2 courses");
      return;
    }

    setForm((prev) => ({ ...prev, selectedCourses: selected }));
  };

  // VALIDATION
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

  // ADD / UPDATE
  const submitStudent = async () => {
    if (!validateForm()) return;

    try {
      if (editId) {
        await API.put(`/students/${editId}`, {
          name: form.name,
          email: form.email,
          age: Number(form.age),
          gender: form.gender,
          phone: form.phone,
        });

        const existingStudent = students.find((s) => s.id === editId);
        const existingCourseIds = existingStudent?.courses?.map((c) => c.id) || [];
        const newCourseIds = form.selectedCourses.filter((id) => !existingCourseIds.includes(id));

        for (const courseId of newCourseIds) {
          await API.post("/students/enroll", {
            studentId: editId,
            courseId,
          });
        }

        toast.success("Student & courses updated successfully");
      } else {
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

  // EDIT
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
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // DELETE
  const deleteStudent = async (id) => {
    if (!confirm("Are you sure?")) return;
    try {
      await API.delete(`/students/${id}`);
      toast.success("Student deleted");
      fetchStudents();
    } catch (e) {
      toast.error("Delete failed");
    }
  };

  const toggleForm = () => setShowForm(!showForm);

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (student.phone &&
      student.phone.toString().toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesEnroll =
      enrollFilter === "all" ||
      (enrollFilter === "enrolled" && student.courses?.length > 0) ||
      (enrollFilter === "not_enrolled" && (!student.courses || student.courses.length === 0));
    return matchesSearch && matchesEnroll;
  });

  // CLEAR
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
    setShowForm(false);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Student Management</h1>
        <button
          onClick={toggleForm}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          Open Form
          <User size={20} />
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search by name or phone"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        <select
          value={enrollFilter}
          onChange={(e) => setEnrollFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          <option value="all">All</option>
          <option value="enrolled">Enrolled</option>
          <option value="not_enrolled">Not Enrolled</option>
        </select>
        <button
          onClick={() => {
            setSearchTerm("");
            setEnrollFilter("all");
          }}
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
            {editId ? "Update Student & Courses" : "Add Student & Enroll"}
          </h2>

          {!editId && (
            <input
              name="id"
              type="number"
              placeholder="ID (number)"
              value={form.id}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-3"
            />
          )}

          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-3"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-3"
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-3"
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-3"
          />

          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-3"
          >
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          {/* COURSE SELECT (MAX 2) */}
          <select
            multiple
            value={form.selectedCourses}
            onChange={handleCourseSelect}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-4 h-32"
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

          <div className="flex items-center gap-3">
            <button
              onClick={submitStudent}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors flex-1"
            >
              {editId ? "Update Student" : "Add & Enroll Student"}
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

      {/* STUDENT LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          <div className="col-span-full text-center py-8 text-gray-500">Loading students...</div>
        ) : filteredStudents.length === 0 ? (
          <div className="col-span-full text-center py-8 text-gray-500">No students found</div>
        ) : (
          filteredStudents.map((s) => {
            const initials = s.name.charAt(0).toUpperCase();
            const coursesText = s.courses?.map((c) => c.title).join(", ") || "None";
            return (
              <div key={s.id} className="bg-white p-4 rounded-lg border-2 border-green-500 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold text-base">
                      {initials}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{s.name}</h3>
                    </div>
                  </div>
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Student #{s.id}
                  </span>
                </div>
                <div className="space-y-1 mb-3">
                  <div className="flex items-center gap-1.5 text-xs text-gray-700">
                    <Calendar size={14} className="text-green-600 flex-shrink-0" />
                    <span>Age: {s.age || "N/A"}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-700">
                    <User size={14} className="text-green-600 flex-shrink-0" />
                    <span>Gender: {s.gender || "N/A"}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-700">
                    <Phone size={14} className="text-green-600 flex-shrink-0" />
                    <span>Phone: {s.phone || "No phone"}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-700">
                    <Mail size={14} className="text-green-600 flex-shrink-0" />
                    <span>Email: {s.email}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-700">
                    <BookOpen size={14} className="text-green-600 flex-shrink-0" />
                    <span>Courses: {coursesText}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-700">
                    <BookOpen size={14} className="text-green-600 flex-shrink-0" />
                    <span>Date: {s.createdDate}</span>
                  </div>

                </div>
                <div className="flex justify-end gap-1">
                  <button
                    onClick={() => editStudent(s)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1.5 rounded-md transition-colors flex items-center gap-1 text-sm"
                  >
                    <Edit3 size={14} />
                    Edit
                  </button>
                  <button
                    onClick={() => deleteStudent(s.id)}
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
