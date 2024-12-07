import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";

export default function JobApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      const userEmail = localStorage.getItem("userEmail");

      if (!userEmail) {
        setError("User not logged in");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:8080/userApplications/${userEmail}` // API endpoint for user applications
        );
        setApplications(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching applications:", err); // Log the error for debugging
        setError("Failed to fetch applications. Please try again later.");
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  if (loading) {
    return <div>Loading applications...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div
      style={{
        backgroundColor: "#e7e7e5",
        minHeight: "100vh",
        // padding: "20px",
      }}
    >
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Your Job Applications</h2>
        {applications.length === 0 ? (
          <div className="alert alert-info">
            You haven't applied for any jobs yet.
          </div>
        ) : (
          <div className="card">
            <div className="card-body">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th>Job Title</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((application) => (
                    <tr key={application.id}>
                      <td>{application.jobName}</td>
                      <td>{application.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}