import SignupForm from "./components/Signup";
import LoginForm from "./components/Login";
import { Route, Routes } from "react-router-dom";
import StudentDashboard from "./components/Dashboard/StudentDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import RoleSelection from "./components/Dashboard/RoleSelection";
import CreateAssignmentForm from "./components/Dashboard/CreateAssignmentForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/studentDashboard" element={<StudentDashboard />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/CreateAssignment" element={<CreateAssignmentForm />} />
      </Routes>
    </>
  );
}

export default App;
