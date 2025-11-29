import { useEffect, useState } from "react";
import API from "../api/api";

export default function Dashboard() {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const res = await API.get("/students");
    setStudents(res.data);
  };

  const deleteStudent = async (id) => {
    await API.delete(`/students/${id}`);
    fetchStudents();
  };

  const editStudent = (student) => {
    // route to edit page OR open modal
    console.log("Edit student:", student);
  };

  const filteredStudents = students.filter((s) =>
    !searchQuery || s.name.toLowerCase().startsWith(searchQuery)
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <input
        type="text"
        placeholder="Search by first letter of name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
        className="mb-4 p-2 border rounded w-full max-w-xs"
        maxLength="1"
      />

      {/* ✅ Students List */}
      <ul>
        {filteredStudents.map((s) => (
          <li
            key={s.id}
            className="border p-4 mb-3 flex justify-between rounded-md"
          >
            <div>
              <p className="font-semibold">
                {s.name} ({s.age})
              </p>
              <p className="text-sm text-gray-600">{s.email}</p>

              <p className="text-sm mt-1">
                <span className="font-medium">Courses:</span>
                {s.courses?.length
                  ? " " + s.courses.map((c) => c.title).join(", ")
                  : " None"}
              </p>
            </div>

            <div className="flex items-center">
              <button
                onClick={() => editStudent(s)}
                className="bg-yellow-500 text-white px-3 py-1 mr-2 rounded"
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
          </li>
        ))}
      </ul>

      {/* ✅ Empty State */}
      {filteredStudents.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          {students.length === 0 ? "No students found." : "No students found matching the search."}
        </p>
      )}
    </div>
  );
}
