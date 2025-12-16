import { useEffect, useState } from "react";
import API from "../api/api";
import { toast } from "react-toastify";

export default function Attendance() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [records, setRecords] = useState([]);

  const [form, setForm] = useState({
    studentId: "",
    courseId: "",
    status: "",
  });

  // =============================
  // INITIAL LOAD
  // =============================
  useEffect(() => {
    fetchStudents();
    fetchCourses();
  }, []);

  // =============================
  // FETCH STUDENTS
  // =============================
  const fetchStudents = async () => {
    try {
      const res = await API.get("/students");
      setStudents(Array.isArray(res.data) ? res.data : []);
    } catch (e) {
      toast.error("Failed to load students");
    }
  };

  // =============================
  // FETCH COURSES
  // =============================
  const fetchCourses = async () => {
    try {
      const res = await API.get("/courses");
      setCourses(Array.isArray(res.data) ? res.data : []);
    } catch (e) {
      toast.error("Failed to load courses");
    }
  };

  // =============================
  // LOAD ATTENDANCE BY STUDENT
  // =============================
  const loadAttendance = async (studentId) => {
    if (!studentId) {
      setRecords([]);
      return;
    }

    try {
      const res = await API.get(`/attendance/student/${studentId}`);
      console.log("Attendance response:", res.data);
      setRecords(Array.isArray(res.data) ? res.data : []);
    } catch (e) {
      console.error(e);
      toast.error("Failed to load attendance records");
      setRecords([]);
    }
  };

  // =============================
  // INPUT CHANGE HANDLER
  // =============================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "studentId") {
      loadAttendance(value);
    }
  };

  // =============================
  // MARK ATTENDANCE
  // =============================
  const submit = async () => {
    if (!form.studentId || !form.courseId || !form.status) {
      toast.error("All fields are required");
      return;
    }

    try {
      await API.post("/attendance/mark", {
        studentId: Number(form.studentId),
        courseId: Number(form.courseId),
        status: form.status,
      });

      toast.success("Attendance marked successfully");

      // Reload records
      loadAttendance(form.studentId);

      // Reset only status
      setForm((prev) => ({ ...prev, status: "" }));
    } catch (e) {
      console.error(e);
      toast.error(
        e.response?.data?.message ||
          "You are not authorized or token expired"
      );
    }
  };

  // =============================
  // UI
  // =============================
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Attendance Management</h1>

      {/* ================= MARK ATTENDANCE ================= */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-3">Mark Attendance</h2>

        {/* STUDENT */}
        <select
          name="studentId"
          value={form.studentId}
          onChange={handleChange}
          className="border p-2 mb-3 w-full"
        >
          <option value="">Select Student</option>
          {students.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>

        {/* COURSE */}
        <select
          name="courseId"
          value={form.courseId}
          onChange={handleChange}
          className="border p-2 mb-3 w-full"
        >
          <option value="">Select Course</option>
          {courses.map((c) => (
            <option key={c.id} value={c.id}>
              {c.title}
            </option>
          ))}
        </select>

        {/* STATUS */}
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="border p-2 mb-3 w-full"
        >
          <option value="">Select Status</option>
          <option value="PRESENT">PRESENT</option>
          <option value="ABSENT">ABSENT</option>
          <option value="LATE">LATE</option>
          <option value="EXCUSED">EXCUSED</option>
        </select>

        <button
          onClick={submit}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>

      {/* ================= ATTENDANCE RECORDS ================= */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-3">Attendance Records</h2>

        {records.length === 0 ? (
          <p className="text-gray-500">No records</p>
        ) : (
          records.map((r) => (
            <div key={r.id} className="border p-3 mb-2 rounded">
              <p className="font-medium">
                {r.student?.name} — {r.course?.title}
              </p>
              <p>Status: {r.status}</p>
              <p>Date: {r.attDate}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
