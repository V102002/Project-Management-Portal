import React from "react";
import { Routes, Route } from "react-router-dom";
import { StudentProvider } from "./components/StudentContext"; // Import the provider
import HomePage from "./components/HomePage";
import ProjectDashboard from "./components/ProjectDashboard";
import DepartmentPage from "./components/DepartmentPage";
import ProfessorList from "./components/ProfessorList";
import ProjectList from "./components/ProjectList";  // Importing ProjectList
import CombinedPage from "./components/CombinedPage"; // Import the new CombinedPage
import './styles.css';

function App() {
  return (
    <StudentProvider>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/department" element={<CombinedPage />} /> {/* Update this route */}
          <Route path="/professors/:courseId" element={<ProfessorList />} />
          <Route path="/projects/:courseId/:professorId" element={<ProjectList />} />
          <Route path="/dashboard" element={<ProjectDashboard />} /> 
          <Route path="/new-project" element={<CombinedPage />} /> {/* New Project route */}
        </Routes>
      </div>
    </StudentProvider>
  );
}

export default App;