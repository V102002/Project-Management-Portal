// src/App.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Ensure Navigate is imported
import { StudentProvider } from "./components/StudentContext";
import { ProjectsProvider } from "./components/ProjectsContext";
import HomePage from "./components/HomePage";
import SignUpLogin from "./components/SignUpLogin"; // Import the SignUpLogin component
import ProjectDashboard from "./components/ProjectDashboard";
import ProjectList from "./components/ProjectList";
import ProfessorHomePage from "./components/ProfessorHomePage";
import TeamDashboard from "./components/TeamDashboard";
import './styles.css';

function App() {
  return (
    <StudentProvider>
      <ProjectsProvider>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect root path to /login */}
            <Route path="/login" element={<SignUpLogin />} /> {/* Route for Sign Up / Login */}
            <Route path="/student" element={<HomePage />} /> {/* Route for Student Home Page */}
            <Route path="/professor" element={<ProfessorHomePage />} /> {/* Route for Professor Home Page */}
            <Route path="/projects/:courseId/:professorId" element={<ProjectList />} /> {/* Route for Project List */}
            <Route path="/dashboard/:projectId" element={<ProjectDashboard />} /> {/* Route for Project Dashboard */}
            <Route path="/team-dashboard" element={<TeamDashboard />} /> {/* Route for Team Dashboard */}
          </Routes>
        </div>
      </ProjectsProvider>
    </StudentProvider>
  );
}

export default App;