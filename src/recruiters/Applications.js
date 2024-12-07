import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarRec from "../NavbarRec";
import backgroundImage from "../images/recruiterapplication.jpg";

export default function Applications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      const recruiterId = localStorage.getItem("recruiterId");

      if (!recruiterId) {
        setError("Recruiter not logged in");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:8080/applications/${recruiterId}` // Corrected template string
        );
        const pendingApplications = response.data.filter(
          (app) => app.status !== "accepted" && app.status !== "rejected"
        );
        setApplications(pendingApplications);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch applications");
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const handleStatusChange = async (applicationId, status) => {
    try {
      await axios.put(
        `http://localhost:8080/application/${applicationId}/status`, // Corrected template string
        { status }
      );
      setApplications((prevApplications) =>
        prevApplications.filter((app) => app.id !== applicationId)
      );
    } catch (error) {
      console.error("Failed to update application status:", error);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          textAlign: "center",
          fontSize: "20px",
          padding: "20px",
          color: "#555",
        }}
      >
        Loading applications...
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          color: "red",
          textAlign: "center",
          fontSize: "20px",
          padding: "20px",
        }}
      >
        {error}
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`, // Correctly use backgroundImage
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <NavbarRec
        style={{
          position: "fixed",
          top: "0",
          width: "100%",
          backgroundColor: "rgba(95, 132, 222, 0.9)",
          color: "#fff",
          padding: "10px 20px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: "1000",
        }}
      />
      <div
        style={{
          maxWidth: "1200px",
          margin: "80px auto 0",
          padding: "20px",
          backgroundColor: "rgba(248, 249, 250, 0.9)",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#5f84de",
            fontWeight: "bold",
          }}
        >
          Applications for Your Jobs
        </h2>
        {applications.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              color: "#555",
              padding: "20px",
              backgroundColor: "#d9edf7",
              border: "1px solid #bce8f1",
              borderRadius: "4px",
            }}
          >
            No applications found for your jobs.
          </div>
        ) : (
          <div
            style={{
              padding: "20px",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "16px",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#5f84de", color: "#ffffff" }}>
                  <th style={{ padding: "10px", textAlign: "left" }}>
                    Applicant Name
                  </th>
                  <th style={{ padding: "10px", textAlign: "left" }}>Email</th>
                  <th style={{ padding: "10px", textAlign: "left" }}>Mobile</th>
                  <th style={{ padding: "10px", textAlign: "left" }}>Age</th>
                  <th style={{ padding: "10px", textAlign: "left" }}>
                    Job Title
                  </th>
                  <th style={{ padding: "10px", textAlign: "left" }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {applications.map((application) => (
                  <tr
                    key={application.id}
                    style={{
                      borderBottom: "1px solid #ddd",
                      transition: "background-color 0.3s",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#f5f5f5")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "transparent")
                    }
                  >
                    <td style={{ padding: "10px" }}>
                      {application.firstName} {application.lastName}
                    </td>
                    <td style={{ padding: "10px" }}>{application.email}</td>
                    <td style={{ padding: "10px" }}>{application.mobile}</td>
                    <td style={{ padding: "10px" }}>{application.age}</td>
                    <td style={{ padding: "10px" }}>{application.jobName}</td>
                    <td style={{ padding: "10px" }}>
                      <button
                        style={{
                          borderRadius: "5px",
                          padding: "5px 15px",
                          backgroundColor: "#28a745",
                          border: "none",
                          color: "#fff",
                          marginRight: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          handleStatusChange(application.id, "accepted")
                        }
                      >
                        Accept
                      </button>
                      <button
                        style={{
                          borderRadius: "5px",
                          padding: "5px 15px",
                          backgroundColor: "#dc3545",
                          border: "none",
                          color: "#fff",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          handleStatusChange(application.id, "rejected")
                        }
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
