import React from "react";
import NavbarRec from "../NavbarRec"; // Import the NavbarRec component
import recruiterhomee from "../images/recruiterhome.jpg"; // Importing the image

export default function RecruiterHome() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${recruiterhomee})`, // Use the imported image
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh", // Full viewport height
          backgroundColor: "#e7e7e5",
          overflow: "hidden", // Prevent scroll
        }}
      >
        {/* Navbar with inline style for background color */}
        <NavbarRec style={{ backgroundColor: "#68afdb" }} />

        {/* Main content */}
        <div
          className="container"
          style={{
            maxWidth: "800px", // Reduced max width for better compactness
            margin: "0 auto",
            padding: "15px", // Reduced padding
            backgroundColor: "#afe0f8",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            opacity: "80%", // Slight transparency to help the text stand out
            marginTop: "120px", // Adjusted top margin
          }}
        >
         <h2
  style={{
    fontSize: "2rem", // Adjusted font size
    color: "#4A5358", // Change color here
    marginBottom: "15px",
    fontWeight: "600",
    letterSpacing: "1px",
  }}
>
  Recruiter Dashboard
</h2>


          <p
            style={{
              fontSize: "1rem",
              color: "#555",
              lineHeight: "1.6",
              marginBottom: "20px",
            }}
          >
            Manage job postings, review applications, and streamline your recruitment workflow to secure top talent quickly.
          </p>

          {/* Informational Sections */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "15px",
            }}
          >
            <div
              style={{
                width: "45%",
                backgroundColor: "#d6f0fd",
                padding: "15px",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "left",
              }}
            >
              <h4
                style={{
                  color: "#5f84de",
                  fontSize: "1.2rem",
                  marginBottom: "10px",
                }}
              >
                Manage Job Listings
              </h4>
              <p style={{ color: "#666", fontSize: "0.95rem" }}>
                Easily track, update, and close job postings. Manage your recruitment workflow efficiently.
              </p>
            </div>

            <div
              style={{
                width: "45%",
                backgroundColor: "#d6f0fd",
                padding: "15px",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "left",
              }}
            >
              <h4
                style={{
                  color: "#5f84de",
                  fontSize: "1.2rem",
                  marginBottom: "10px",
                }}
              >
                Review Applications
              </h4>
              <p style={{ color: "#666", fontSize: "0.95rem" }}>
                Review, shortlist, and track applications for the best candidates. Keep hiring simple.
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: "30px",
              backgroundColor: "#d6f0fd",
              padding: "15px",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
              textAlign: "left",
            }}
          >
            <h4
              style={{
                color: "#5f84de",
                fontSize: "1.2rem",
                marginBottom: "10px",
              }}
            >
              View Reports & Analytics
            </h4>
            <p style={{ color: "#666", fontSize: "0.95rem" }}>
              Monitor key recruitment metrics and stay on top of your hiring process with detailed reports.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}