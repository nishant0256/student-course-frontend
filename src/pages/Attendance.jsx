import { useEffect, useState } from "react";
import API from "../api/api";
import { toast } from "react-toastify";
import { UserCheck, X } from "lucide-react";

export default function Attendance() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [records, setRecords] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

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
  fetchAllAttendance(); // ✅ AUTO LOAD LIST
}, []);


  // =============================
  // FETCH STUDENTS
  // =============================
  const fetchStudents = async () => {
    try {
      const res = await API.get("/students");
      setStudents(Array.isArray(res.data) ? res.data : []);
    } catch {
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
    } catch {
      toast.error("Failed to load courses");
    }
  };

  const fetchAllAttendance = async () => {
  try {
    const res = await API.get("/attendance");
    setRecords(Array.isArray(res.data) ? res.data : []);
  } catch (e) {
    toast.error("Failed to load attendance");
  }
};


  // =============================
  // LOAD ATTENDANCE BY STUDENT
  // =============================
  const loadAttendance = async (studentId) => {
    if (!studentId) {
  fetchAllAttendance(); // ✅ restore full list
  return;
}


    try {
      const res = await API.get(`/attendance/student/${studentId}`);
      setRecords(Array.isArray(res.data) ? res.data : []);
    } catch {
      toast.error("Failed to load attendance records");
      setRecords([]);
    }
  };

  // =============================
  // INPUT CHANGE
  // =============================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

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
      loadAttendance(form.studentId);

      setShowForm(false);
      setForm({ studentId: "", courseId: "", status: "" });
    } catch (e) {
      toast.error(
        e.response?.data?.message || "Something went wrong"
      );
    }
  };

  // =============================
  // HELPERS (MAP ID → NAME)
  // =============================
  const getStudentName = (id) =>
    students.find((s) => s.id === id)?.name || `Student #${id}`;

  const getCourseTitle = (id) =>
    courses.find((c) => c.id === id)?.title || `Course #${id}`;

  // =============================
  // FILTER RECORDS
  // =============================
  const filteredRecords = records.filter((r) => {
    const matchesSearch =
      !searchTerm ||
      getStudentName(r.studentId)
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesStatus =
      !statusFilter || r.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // =============================
  // STATUS BADGE
  // =============================
  const statusBadge = (status) => {
    switch (status) {
      case "PRESENT":
        return "bg-green-100 text-green-700";
      case "ABSENT":
        return "bg-red-100 text-red-700";
      case "LATE":
        return "bg-yellow-100 text-yellow-700";
      case "EXCUSED":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };



  // =============================
  // UI
  // =============================
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Attendance Management
        </h1>

        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl
          bg-green-600 text-white font-medium shadow hover:scale-105 transition"
        >
          <UserCheck size={18} />
          Mark Attendance
        </button>
      </div>

      {/* SEARCH + FILTER */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          placeholder="Search by student name..."
          className="flex-1 px-4 py-3 rounded-lg border"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-3 rounded-lg border"
        >
          <option value="">All Statuses</option>
          <option value="PRESENT">PRESENT</option>
          <option value="ABSENT">ABSENT</option>
          <option value="LATE">LATE</option>
          <option value="EXCUSED">EXCUSED</option>
        </select>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <div className="grid grid-cols-12 px-6 py-4 bg-blue-100
        text-blue-700 font-semibold text-sm min-w-[900px]">
          <div className="col-span-1">ID</div>
          <div className="col-span-3">Student</div>
          <div className="col-span-3">Course</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-3">Date</div>
        </div>

        {filteredRecords.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No attendance records found
          </div>
        ) : (
          filteredRecords.map((r) => (
            <div
              key={r.id}
              className="grid grid-cols-12 px-6 py-4 border-t
              hover:bg-gray-50 text-sm min-w-[900px]"
            >
              <div className="col-span-1">{r.id}</div>

              <div className="col-span-3 font-medium">
                {getStudentName(r.studentId)}
              </div>

              <div className="col-span-3 font-medium">
                {getCourseTitle(r.courseId)}
              </div>

              <div className="col-span-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${statusBadge(
                    r.status
                  )}`}
                >
                  {r.status}
                </span>
              </div>

              <div className="col-span-3">{r.date}</div>
            </div>
          ))
        )}
      </div>

      {/* MARK ATTENDANCE MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white max-w-3xl w-full rounded-xl p-8 relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400"
            >
              <X />
            </button>

            <h2 className="text-2xl font-bold mb-6">Mark Attendance</h2>

            <div className="grid gap-4">
              <select
                name="studentId"
                value={form.studentId}
                onChange={handleChange}
                className="border px-4 py-2 rounded"
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
                className="border px-4 py-2 rounded"
              >
                <option value="">Select Course</option>
                {courses.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title}
                  </option>
                ))}
              </select>

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="border px-4 py-2 rounded"
              >
                <option value="">Select Status</option>
                <option value="PRESENT">PRESENT</option>
                <option value="ABSENT">ABSENT</option>
                <option value="LATE">LATE</option>
                <option value="EXCUSED">EXCUSED</option>
              </select>
            </div>

            <button
              onClick={submit}
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
