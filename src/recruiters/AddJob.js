import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavbarRec from "../NavbarRec";
import image from "../images/recruiteraddjob.jpg"; // Import the image

export default function AddJob() {
  const [formData, setFormData] = useState({
    name: "",
    salary: "",
    location: "",
    description: "",
    company: "",
    mobile: "",
    recruiter_id: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const recruiterId = localStorage.getItem("recruiterId");
    if (recruiterId) {
      setFormData((prevState) => ({
        ...prevState,
        recruiter_id: recruiterId,
      }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const jobData = {
        name: formData.name,
        salary: formData.salary,
        location: formData.location,
        description: formData.description,
        company: formData.company,
        mobile: formData.mobile,
        recruiter: { id: formData.recruiter_id },
      };
      await axios.post("http://localhost:8080/job", jobData);
      alert("Job added successfully!");
      navigate("/recruiter");
    } catch (error) {
      console.error("Error adding job:", error.response || error.message);
      alert("Failed to add job. Please try again.");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${image})`, // Correctly use the background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Full viewport height
        overflow: "hidden", // Prevent scrolling
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavbarRec />
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div
          className="card border-0"
          style={{
            width: "600px",
            maxHeight: "90%",
            borderRadius: "20px",
            backgroundColor: "#dde4ea", // Background color #bfcede
            padding: "20px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            overflowY: "auto", // Keeps scrolling inside the container
            marginTop: "-35px", // Lifts the container upwards by 50px
          }}
        >
          <h2 className="text-center mb-4">Add Job</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="name">Job Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#ffffff", // Light blue background color for input fields
                }}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="salary">Salary</label>
              <input
                type="number"
                className="form-control"
                id="salary"
                name="salary"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#ffffff", // Light blue background color for input fields
                }}
                value={formData.salary}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#ffffff", // Light blue background color for input fields
                }}
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                className="form-control"
                id="company"
                name="company"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#ffffff", // Light blue background color for input fields
                }}
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="tel"
                className="form-control"
                id="mobile"
                name="mobile"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#ffffff", // Light blue background color for input fields
                }}
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="description">Job Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="4"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#ffffff", // Light blue background color for input fields
                }}
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100" // Blue button
              style={{
                borderRadius: "10px",
                backgroundColor: "#007bff", // Blue color
                border: "none",
                padding: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#bacbdb")} // Hover color
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#6a7e93")} // Normal color
            >
              Add Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
