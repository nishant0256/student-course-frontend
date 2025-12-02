import { useEffect, useState } from "react";
import API from "../api/api";
// import { FaUser, FaIdCard, FaChild, FaVenusMars, FaPhone, FaEnvelope, FaBook } from 'react-icons/fa';
import { Trash2, Phone, X, Calendar, User, Stethoscope, Search, Edit3, UserCheck, UserCircle2Icon, UserCheck2Icon, User2, Mail, BookmarkPlus, BookAIcon} from "lucide-react";


export default function Student() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [editId, setEditId] = useState(null);

  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);

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

  // ✅ MERGED FUNCTION (ADD / ENROLL)
  const submitStudent = async (type) => {
    if (type === "ADD") {
      await API.post("/students", {
        id,
        name,
        email,
        age,
        gender,
        phone,
        courseId: selectedCourse,
      });
      clearForm();
    }

    if (type === "ENROLL") {
      if (!selectedStudent || !selectedCourse) return;
      await API.post("/students/enroll", {
        studentId: selectedStudent,
        courseId: selectedCourse,
      });
    }

    fetchStudents();
  };

  const updateStudent = async () => {
    await API.put(`/students/${editId}`, {
      name,
      email,
      age,
      gender,
      phone,
    });
    clearForm();
    fetchStudents();
  };

  const deleteStudent = async (studentId) => {
    await API.delete(`/students/${studentId}`);
    fetchStudents();
  }

  // ===== HELPERS =====
  const editStudent = (s) => {
    setEditId(s.id);
    setName(s.name);
    setEmail(s.email);
    setAge(s.age);
    setGender(s.gender || "");
    setPhone(s.phone || "");
    setIsFormOpen(true);
  };

  const clearForm = () => {
    setId("");
    setName("");
    setEmail("");
    setAge("");
    setGender("");
    setPhone("");
    setEditId(null);
    setSelectedCourse("");
    setIsFormOpen(false);
  };

  // ===== FILTER =====
  const filteredStudents = students
    .filter((s) => {
      const query = searchQuery.toLowerCase();
      return (
        s.name.toLowerCase().includes(query) ||
        s.id.toString().toLowerCase().includes(query) ||
        (s.gender && s.gender.toLowerCase().includes(query)) ||
        (s.phone && s.phone.toLowerCase().includes(query))
      );
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  // ===== UI =====
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-teal-800 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Student Management</h1> 
          <div className=""></div>
          <button
            onClick={() => {
              if (isFormOpen) {
                clearForm();
              } else {
                clearForm();
                setIsFormOpen(true);
              }
            }}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold shadow-md"
          >
            {isFormOpen ? "Close Form" : "Open Form"}
          </button>
        </div>
         <div className="About-Students bg-gradient-to-r from-blue-900 to-teal-800 text-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-bold mb-4 text-center">About Student-Course Management</h2>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              The Student–Course Management system is designed to efficiently handle student records and course enrollment in one centralized platform. It enables administrators to manage student information, assign courses, and track enrollment details with ease.
            </p>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>Improves accuracy and reduces manual work.</li>
              <li>Ensures seamless coordination between students and courses.</li>
              <li>Features a user-friendly interface for faster, organized, and reliable management of student data and course assignments.</li>
            </ul>
          </div>
         </div>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="Search by name, ID, gender, or phone."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* ADD / UPDATE FORM */}
        {isFormOpen && (
          <div className="mb-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex justify-center items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{editId ? "Update Student" : "Add New Student"}</h3>
            </div>
            {!editId && (
              <input
                className="border border-gray-300 p-3 rounded-lg mr-3 mb-3 w-full sm:w-auto"
                placeholder="ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            )}

            <input
              className="border border-gray-300 p-3 rounded-lg mr-3 mb-3 w-full sm:w-auto"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="border border-gray-300 p-3 rounded-lg mr-3 mb-3 w-full sm:w-auto"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="border border-gray-300 p-3 rounded-lg mr-3 mb-3 w-full sm:w-auto"
              placeholder="Age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />

            <select
              className="border border-gray-300 p-3 rounded-lg mr-3 mb-3 w-full sm:w-auto"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <input
              className="border border-gray-300 p-3 rounded-lg mr-3 mb-3 w-full sm:w-auto"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <select
              className="border border-gray-300 p-3 rounded-lg mr-3 mb-3 w-full sm:w-auto"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              <option value="">Select Course</option>
              {courses.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>

            {editId ? (
              <button
                onClick={updateStudent}
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold mr-3"
              >
                Update
              </button>
            ) : (
              <button
                onClick={() => submitStudent("ADD")}
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold"
              >
                Add
              </button>
            )}
          </div>
        )}

        {/* ENROLL STUDENT */}
        <div className="mb-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-semibold mb-4 text-gray-800 text-lg">Enroll Student to Course</h3>

          <select
            className="border border-gray-300 p-3 rounded-lg mr-3 mb-3 w-full sm:w-auto"
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
            className="border border-gray-300 p-3 rounded-lg mr-3 mb-3 w-full sm:w-auto"
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
            onClick={() => submitStudent("ENROLL")}
            className="bg-green-300 hover:bg-gray-300 text-black px-6 py-2 rounded-lg font-semibold"
          >
            Enroll
          </button>
        </div>

        {/* LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredStudents.map((s) => (
            <div key={s.id} className="bg-white shadow-md rounded-xl p-6 border-l-4 border-teal-500 flex flex-col justify-between h-full">
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <UserCircle2Icon className="mr-2 text-xl text-teal-500" />
                  <h3 className="font-bold text-lg text-gray-800">{s.name}</h3>

                  <div className="ml-auto text-sm bg-teal-100 text-teal-800 px-3 py-1 rounded-full font-semibold">
                    <span>Student #{s.id}</span>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-gray-600">
                  
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-teal-500" />
                    <span>Age: {s.age}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="mr-2 h-4 w-4 text-teal-500" />
                    <span>Gender: {s.gender || 'N/A'}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2 h-4 w-4 text-teal-500" />
                    <span>Phone: {s.phone || 'N/A'}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4 text-teal-500" />
                    <span>Email: {s.email || 'N/A'}</span>
                  </div>
                  <div className="flex items-center">
                    <BookAIcon className="mr-2 h-4 w-4 text-teal-500" />
                    <span>Course: {s.courses?.length
                      ? s.courses.map((c) => c.title).join(", ")
                      : " None"}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-2 mt-auto">
                <button
                  onClick={() => editStudent(s)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm flex items-center space-x-1"
                >
                  <Edit3 className="h-4 w-4" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => deleteStudent(s.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm flex items-center space-x-1"
                >
                  <Trash2 className="h-4 w-4" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
