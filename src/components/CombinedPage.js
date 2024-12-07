import React from 'react';
import { useNavigate } from 'react-router-dom';

// Sample data for professors
const professors = {
  CS101: [
    { id: 1, name: "Dr. Smith", info: "Dr. Smith is an expert in AI and Machine Learning." },
    { id: 2, name: "Prof. Johnson", info: "Prof. Johnson specializes in Database Systems." },
  ],
  MATH204: [
    { id: 3, name: "Dr. Lee", info: "Dr. Lee focuses on Applied Mathematics." },
    { id: 4, name: "Prof. Kim", info: "Prof. Kim is a statistician and data analyst." },
  ],
  // Add other courses here
};

function CombinedPage() {
  const navigate = useNavigate(); // Initialize the navigate function
  const courses = Object.keys(professors);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Department Page</h1>
      {courses.map((course) => (
        <div key={course}>
          <h2>{course}</h2> {/* Display the course as a heading */}
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {professors[course].map((professor) => (
              <div
                key={professor.id}
                style={{
                  margin: "10px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  width: "200px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <p>{professor.name}</p>
                <button
                  style={{
                    marginTop: "10px",
                    padding: "5px 10px",
                    border: "none",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    cursor: "pointer",
                    borderRadius: "5px",
                  }}
                  onClick={() => alert(professor.info)} // Show info in an alert
                >
                  More Info
                </button>
                <button
                  style={{
                    marginTop: "10px",
                    padding: "5px 10px",
                    border: "none",
                    backgroundColor: "#28a745",
                    color: "#fff",
                    cursor: "pointer",
                    borderRadius: "5px",
                  }}
                  onClick={() => navigate(`/projects/${course}/${professor.id}`)} // Navigate to ProjectList
                >
                  View Projects
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CombinedPage;