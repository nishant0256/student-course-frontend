import { useEffect, useState } from "react";
import API from "../api/api";
import { toast } from "react-toastify";

export default function Grade() {
  const [grades, setGrades] = useState([]);
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    id: "",
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

  const fetchGrades = async () => {
    const res = await API.get("/grades/student/0").catch(() => null);
    // optional: just leave empty initially or fetch all from custom endpoint
  };

  const fetchStudents = async () => {
    const res = await API.get("/students");
    setStudents(res.data || []);
  };

  const fetchCourses = async () => {
    const res = await API.get("/courses");
    setCourses(res.data || []);
  };

  // For demo: load all grades by selected student filter
  const loadGradesByStudent = async (studentId) => {
    if (!studentId) {
      setGrades([]);
      return;
    }
    const res = await API.get(`/grades/student/${studentId}`);
    setGrades(res.data || []);
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    if (!form.id) {
      toast.error("Grade ID is required");
      return false;
    }
    if (!form.studentId || !form.courseId) {
      toast.error("Student and Course are required");
      return false;
    }
    if (!form.assessmentType) {
      toast.error("Assessment type is required");
      return false;
    }
    if (!form.score || !form.maxScore) {
      toast.error("Score and Max Score are required");
      return false;
    }
    return true;
  };

  const submitGrade = async () => {
    if (!validate()) return;

    const payload = {
      id: Number(form.id),
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
      if (payload.studentId) {
        await loadGradesByStudent(payload.studentId);
      }
    } catch (e) {
      toast.error(e.response?.data?.message || "Grade operation failed");
    }
  };

  const editGrade = (g) => {
    setEditId(g.id);
    setForm({
      id: g.id,
      studentId: g.studentId,
      courseId: g.courseId,
      assessmentType: g.assessmentType,
      score: g.score,
      maxScore: g.maxScore,
    });
  };

  const deleteGrade = async (id, studentId) => {
    if (!confirm("Are you sure?")) return;
    await API.delete(`/grades/${id}`);
    toast.success("Grade deleted");
    if (studentId) {
      await loadGradesByStudent(studentId);
    }
  };

  const clearForm = () => {
    setForm({
      id: "",
      studentId: "",
      courseId: "",
      assessmentType: "",
      score: "",
      maxScore: "",
    });
    setEditId(null);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Grade Management</h1>

      {/* FILTER BY STUDENT TO VIEW GRADES */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">View Grades by Student</h2>
        <select
          className="border p-2 mb-2 w-full"
          onChange={(e) => loadGradesByStudent(e.target.value)}
        >
          <option value="">Select Student</option>
          {students.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      {/* FORM */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">
          {editId ? "Update Grade" : "Add Grade"}
        </h2>

        <input
          name="id"
          placeholder="Grade ID"
          value={form.id}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        />

        <select
          name="studentId"
          value={form.studentId}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        >
          <option value="">Select Student</option>
          {students.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>

        <select
          name="courseId"
          value={form.courseId}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        >
          <option value="">Select Course</option>
          {courses.map((c) => (
            <option key={c.id} value={c.id}>
              {c.title}
            </option>
          ))}
        </select>

        <input
          name="assessmentType"
          placeholder="Assessment Type (e.g., MID, FINAL)"
          value={form.assessmentType}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        />

        <input
          type="number"
          name="score"
          placeholder="Score"
          value={form.score}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        />

        <input
          type="number"
          name="maxScore"
          placeholder="Max Score"
          value={form.maxScore}
          onChange={handleChange}
          className="border p-2 mb-4 w-full"
        />

        <button
          onClick={submitGrade}
          className="bg-green-600 text-white px-4 py-2 rounded mr-2"
        >
          {editId ? "Update Grade" : "Add Grade"}
        </button>

        <button
          onClick={clearForm}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>

      {/* GRADE LIST */}
      <div className="grid md:grid-cols-2 gap-4">
        {grades.map((g) => (
          <div key={g.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold mb-1">
              {g.studentName} - {g.courseTitle}
            </h3>
            <p>Assessment: {g.assessmentType}</p>
            <p>
              Score: {g.score} / {g.maxScore} ({g.gradeLetter})
            </p>
            <p>Date: {g.gradedDate}</p>

            <div className="flex gap-2 mt-2">
              <button
                onClick={() => editGrade(g)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteGrade(g.id, g.studentId)}
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
