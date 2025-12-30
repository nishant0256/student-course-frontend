import { useEffect, useState } from "react";
import API from "../api/api";
import { toast } from "react-toastify";
import { Edit3, Trash2, User, X } from "lucide-react";

export default function Grade() {
  const [grades, setGrades] = useState([]);
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [editId, setEditId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [courseFilter, setCourseFilter] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    studentId: "",
    courseId: "",
    assessmentType: "",
    score: "",
    maxScore: "",
  });

  useEffect(() => {
    fetchGrades();
    fetchStudents();
    fetchCourses();
  }, []);

  // ================= FETCH =================
  const fetchGrades = async () => {
    try {
      const res = await API.get("/grades");
      setGrades(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load grades");
    }
  };

  const fetchStudents = async () => {
    try {
      const res = await API.get("/students");
      const data = res.data?.content ?? res.data;
      setStudents(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
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

  // ================= FORM =================
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // ================= SAVE =================
  const submitGrade = async () => {
    if (!form.studentId || !form.courseId || !form.assessmentType || !form.score || !form.maxScore) {
      toast.error("All fields are required");
      return;
    }

    const payload = {
      studentId: Number(form.studentId),
      courseId: Number(form.courseId),
      assessmentType: form.assessmentType,
      score: Number(form.score),
      maxScore: Number(form.maxScore),
    };

    try {
      if (editId) {
        await API.put(`/grades/${editId}`, payload);
        toast.success("Grade updated");
      } else {
        await API.post("/grades", payload);
        toast.success("Grade added");
      }

      clearForm();
      fetchGrades();
    } catch {
      toast.error("Operation failed");
    }
  };

  const editGrade = (g) => {
    setEditId(g.id);
    setForm({
      studentId: g.studentId,
      courseId: g.courseId,
      assessmentType: g.assessmentType,
      score: g.score,
      maxScore: g.maxScore,
    });
    setShowForm(true);
  };

  const deleteGrade = async (id) => {
    if (!confirm("Delete grade?")) return;
    await API.delete(`/grades/${id}`);
    fetchGrades();
  };

  const clearForm = () => {
    setEditId(null);
    setShowForm(false);
    setForm({
      studentId: "",
      courseId: "",
      assessmentType: "",
      score: "",
      maxScore: "",
    });
  };

  // ================= FILTER =================
  const filtered = grades.filter((g) => {
    const student = students.find((s) => s.id === g.studentId);
    const course = courses.find((c) => c.id === g.courseId);

    const gradeDisplay = `${g.assessmentType} - ${g.score}/${g.maxScore}`;
    const matchesSearch =
      student?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gradeDisplay.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.assessmentType?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCourse = !courseFilter || course?.id === Number(courseFilter);

    return matchesSearch && matchesCourse;
  });

  // ================= UI =================
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Grade Management
        </h1>

        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl
          bg-green-600 text-white font-medium shadow hover:scale-105 transition"
        >
          <User size={18} />
          Add Grade
        </button>
      </div>

      {/* SEARCH + FILTER */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          placeholder="Search by student name, course, or grade..."
          className="flex-1 px-4 py-3 rounded-lg border"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={courseFilter}
          onChange={(e) => setCourseFilter(e.target.value)}
          className="px-4 py-3 rounded-lg border"
        >
          <option value="">All Courses</option>
          {courses.map((c) => (
            <option key={c.id} value={c.id}>
              {c.title}
            </option>
          ))}
        </select>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <div className="grid grid-cols-12 px-6 py-4 bg-blue-100
        text-blue-700 font-semibold text-sm min-w-[900px]">
          <div className="col-span-1">ID</div>
          <div className="col-span-3">Student</div>
          <div className="col-span-3">Course</div>
          <div className="col-span-2">Grade</div>
          <div className="col-span-3 text-right">Actions</div>
        </div>

        {filtered.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No grades found
          </div>
        ) : (
          filtered.map((g) => {
            const student = students.find((s) => s.id === g.studentId);
            const course = courses.find((c) => c.id === g.courseId);

            return (
              <div
                key={g.id}
                className="grid grid-cols-12 px-6 py-4 border-t
                hover:bg-gray-50 text-sm min-w-[900px]"
              >
                <div className="col-span-1">{g.id}</div>

                <div className="col-span-3">
                  <p className="font-medium">{student?.name || "Unknown"}</p>
                  <p className="text-xs text-gray-500">{student?.email || ""}</p>
                </div>

                <div className="col-span-3">
                  <p className="font-medium">{course?.title || "Unknown"}</p>
                  <p className="text-xs text-gray-500">Credits: {course?.credits || 0}</p>
                </div>

                <div className="col-span-2">{g.assessmentType} - {g.score}/{g.maxScore}</div>

                <div className="col-span-3 flex justify-end gap-2">
                  <button
                    onClick={() => editGrade(g)}
                    className="p-2 bg-yellow-100 rounded"
                  >
                    <Edit3 size={14} />
                  </button>

                  <button
                    onClick={() => deleteGrade(g.id)}
                    className="p-2 bg-red-100 rounded"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* ADD / EDIT MODAL */}
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
              {editId ? "Update Grade" : "Add Grade"}
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <select
                name="studentId"
                value={form.studentId}
                onChange={handleChange}
                className="border px-4 py-2 rounded"
              >
                <option value="">Select Student</option>
                {students.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} ({s.email})
                  </option>
                ))}
              </select>

              <select
                name="courseId"
                value={form.courseId}
                onChange={handleChange}
                className="border px-4 py-2 rounded"
              >
                <option value="">Select Course</option>
                {courses.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title} (₹{c.credits})
                  </option>
                ))}
              </select>

              <input
                name="assessmentType"
                value={form.assessmentType}
                onChange={handleChange}
                placeholder="Assessment Type (e.g., MID, FINAL)"
                className="border px-4 py-2 rounded col-span-2"
              />

              <input
                name="score"
                value={form.score}
                onChange={handleChange}
                placeholder="Score"
                type="number"
                className="border px-4 py-2 rounded"
              />

              <input
                name="maxScore"
                value={form.maxScore}
                onChange={handleChange}
                placeholder="Max Score"
                type="number"
                className="border px-4 py-2 rounded"
              />
            </div>

            <button
              onClick={submitGrade}
              className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg"
            >
              {editId ? "Update" : "Add"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
