import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StudentContext } from "./StudentContext";

function HomePage() {
  const navigate = useNavigate();
  const { studentProjects } = useContext(StudentContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Home Page</h1>

      {/* "New Project" button */}
      <button
        onClick={() => navigate("/department")}
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
