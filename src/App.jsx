import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Student from "./pages/Student";
import Course from "./pages/Course";
import Home from "./pages/home";
import Batches from "./pages/Batches";
import Programming from "./pages/Programming";
import WebDevelopment from "./pages/WebDevelopment";
import DataScience from "./pages/DataScience";
import CloudComputing from "./pages/CloudComputing";
import CyberSecurity from "./pages/CyberSecurity";
import DevOps from "./pages/DevOps";
import AIML from "./pages/AIML";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import DatabaseManagement from "./pages/DatabaseManagement";
import Login from "./pages/login.jsx";
import Grade from "./pages/Grade";
import Reports from "./pages/Reports";
import Attendance from "./pages/Attendance";
import PrivateRoute from "./auth/PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Course />} />
            <Route path="/students" element={<Student />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/programming" element={<Programming />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/data-science" element={<DataScience />} />
            <Route path="/cloud-computing" element={<CloudComputing />} />
            <Route path="/cyber-security" element={<CyberSecurity />} />
            <Route path="/devops" element={<DevOps />} />
            <Route path="/ai-ml" element={<AIML />} />
            <Route
              path="/mobile-app-development"
              element={<MobileAppDevelopment />}
            />
            <Route
              path="/database-management"
              element={<DatabaseManagement />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/grades" element={<Grade />} />
            <Route path="/batches" element={<Batches />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/reports" element={<Reports />} />
            <Route
              path="/reports"
              element={
                <PrivateRoute roles={["ROLE_ADMIN", "ROLE_TEACHER"]}>
                  <Reports />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
