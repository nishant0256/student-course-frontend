import { useEffect, useState } from "react";
import API from "../api/api";
import { toast } from "react-toastify";
import { Edit3, Trash2 } from "lucide-react";

export default function Dashboard() {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // ================= FETCH =================
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await API.get("/students");
      setStudents(Array.isArray(res.data) ? res.data : []);
    } catch {
      toast.error("Failed to load students");
    }
  };

  // ================= DELETE =================
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

  // ================= EDIT =================
  const editStudent = (student) => {
    console.log("Edit student:", student);
  };

  // ================= FILTER =================
  const filteredStudents = students.filter((s) =>
    !searchQuery ||
    s.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  // ================= UI =================
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Dashboard
        </h1>
      </div>

      {/* SEARCH */}
      <div className="flex mb-6">
        <input
          placeholder="Search by first letter of name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          maxLength={1}
          className="flex-1 px-4 py-3 rounded-lg border max-w-xs"
        />
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        {/* HEADER ROW */}
        <div
          className="grid grid-cols-12 px-6 py-4 bg-blue-100
          text-blue-700 font-semibold text-sm min-w-[900px]"
        >
          <div className="col-span-1">ID</div>
          <div className="col-span-3">Name</div>
          <div className="col-span-1">Age</div>
          <div className="col-span-3">Email</div>
          <div className="col-span-2">Course</div>
          <div className="col-span-2 text-center">Actions</div>
        </div>

        {/* BODY */}
        {filteredStudents.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            {students.length === 0
              ? "No students found."
              : "No students found matching the search."}
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

              <div className="col-span-3 text-gray-600">
                {s.email}
              </div>

              <div className="col-span-2">
                {s.courseTitle || "—"}
              </div>

              <div className="col-span-2 flex justify-center gap-4">
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
    </div>
  );
}
