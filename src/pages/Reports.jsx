import { useEffect, useState } from "react";
import API from "../api/api";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell,
  BarChart, Bar
} from "recharts";
import { toast } from "react-toastify";

const COLORS = ["#4caf50", "#f44336", "#ff9800", "#2196f3"];

export default function Reports() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [performance, setPerformance] = useState(null);
  const [attendance, setAttendance] = useState(null);
  const [enrollmentSummary, setEnrollmentSummary] = useState([]);

  useEffect(() => {
    fetchStudents();
    fetchEnrollmentSummary();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await API.get("/students");
      setStudents(res.data || []);
    } catch (e) {
      toast.error("Unable to load students");
    }
  };

  const fetchPerformance = async (studentId) => {
    if (!studentId) { setPerformance(null); return; }
    try {
      const res = await API.get(`/reports/student/${studentId}/performance`);
      setPerformance(res.data);
    } catch (e) {
      toast.error("Unable to fetch performance");
    }
  };

  const fetchAttendance = async (studentId) => {
    if (!studentId) { setAttendance(null); return; }
    try {
      const res = await API.get(`/reports/student/${studentId}/attendance`);
      setAttendance(res.data);
    } catch (e) {
      toast.error("Unable to fetch attendance");
    }
  };

  const fetchEnrollmentSummary = async () => {
    try {
      const res = await API.get("/reports/courses/enrollment-summary");
      setEnrollmentSummary(res.data || []);
    } catch (e) {
      toast.error("Unable to fetch enrollment summary");
    }
  };

  const onStudentChange = (e) => {
    const id = e.target.value;
    setSelectedStudent(id);
    fetchPerformance(id);
    fetchAttendance(id);
  };

  // Prepare data for charts
  const lineData = performance?.trend?.map(item => ({
    date: item.date,
    percent: item.percent
  })) ?? [];

  const pieData = attendance ? [
    { name: "Present", value: attendance.present },
    { name: "Absent", value: attendance.absent },
    { name: "Late", value: attendance.late },
    { name: "Excused", value: attendance.excused }
  ] : [];

  const barData = enrollmentSummary.map(e => ({
    name: e.courseTitle,
    count: e.enrolledCount
  }));

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Reports Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="col-span-1 bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-2">Select Student</h2>
          <select
            className="border p-2 w-full"
            value={selectedStudent}
            onChange={onStudentChange}
          >
            <option value="">-- Select Student --</option>
            {students.map(s => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>

          {performance && (
            <div className="mt-4">
              <h3 className="font-semibold">Overview</h3>
              <p><strong>GPA / Avg %:</strong> {performance.gpa ?? 0}</p>
              <p><strong>Courses graded:</strong> {performance.courseScores?.length ?? 0}</p>
            </div>
          )}
        </div>

        <div className="col-span-2 bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-2">Enrollment Summary (All Courses)</h2>
          <div style={{ width: "100%", height: 240 }}>
            <ResponsiveContainer>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" interval={0} angle={-25} textAnchor="end" height={80} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" name="Enrolled" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Performance and Attendance charts */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-2">Performance Trend</h2>
          {lineData.length === 0 ? (
            <p>No grade data available</p>
          ) : (
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="percent" stroke="#4caf50" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
          {performance?.courseScores && performance.courseScores.length > 0 && (
            <div className="mt-3">
              <h3 className="font-semibold mb-1">Latest Scores</h3>
              <ul className="list-disc ml-5">
                {performance.courseScores.slice(-5).map((cs, idx) => (
                  <li key={idx}>
                    {cs.courseTitle}: {cs.percent}% ({cs.gradeLetter})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-2">Attendance Breakdown</h2>
          {attendance ? (
            <>
              <div style={{ width: "100%", height: 260 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80} label>
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-2">
                <p><strong>Total Classes:</strong> {attendance.totalClasses}</p>
                <p><strong>Present:</strong> {attendance.present}</p>
                <p><strong>Absent:</strong> {attendance.absent}</p>
                <p><strong>Attendance %:</strong> {attendance.attendancePercentage}%</p>
              </div>
            </>
          ) : (
            <p>No attendance data available</p>
          )}
        </div>
      </div>
    </div>
  );
}
