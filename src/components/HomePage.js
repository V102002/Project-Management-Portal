// src/components/HomePage.js
import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { StudentContext } from "./StudentContext";

function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { studentProjects } = useContext(StudentContext);
  
  // Get the student's name from the location state
  const studentName = location.state?.name || "Student"; // Default to "Student" if name is not provided

  return (
    <div style={{ padding: "20px" }}>
      <h1>Hi {studentName}</h1> {/* Personalized greeting */}
      {/* Removed email display */}

      {/* "New Project" button */}
      <button
        onClick={() => navigate("/new-project")} // Updated to navigate to the new project page
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        New Project
      </button>

      {/* My Projects Section */}
      <h2>Your Projects</h2>
      <div>
        {studentProjects.length > 0 ? (
          studentProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => navigate(`/dashboard/${project.id}`)} // Navigate to dashboard
              style={{
                border: "1px solid #ccc",
                margin: "10px 0",
                padding: "10px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))
        ) : (
          <p>No projects added yet. Click "New Project" to get started!</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;