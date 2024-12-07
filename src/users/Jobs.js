
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query
  const [filteredJobs, setFilteredJobs] = useState([]); // State for filtered jobs
  const [hoveredCard, setHoveredCard] = useState(null); // State to track hovered card
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in
    const userId = localStorage.getItem("userId");
    if (!userId) {
      navigate("/loginuser"); // Redirect to login if not logged in
    }

    // Fetch jobs from API
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:8080/jobs");
        console.log("Fetched jobs:", response.data); // Debug API response
        setJobs(response.data);
        setFilteredJobs(response.data); // Initialize filtered jobs with all jobs
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, [navigate]);

  const handleApply = (jobId) => {
    navigate(`/user/job/${jobId}`); // Redirect to job application page
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter jobs based on the query
    const filtered = jobs.filter(
      (job) =>
        job.name.toLowerCase().includes(query) ||
        job.description?.toLowerCase().includes(query) ||
        job.company?.toLowerCase().includes(query) ||
        job.location?.toLowerCase().includes(query)
    );
    setFilteredJobs(filtered);
  };

  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        backgroundColor: "#1a1a1a",
      }}
    >
      <Navbar />
      <div className="container my-5">
        <div className="row">
          {/* Left Sidebar */}
          <div className="col-md-4">
            <div
              className="mb-4 p-4 bg-dark text-light rounded"
              style={{
                background: "linear-gradient(to bottom, #1f2937, #374151)", // Updated gradient for sidebar
              }}
            >
              {/* Change Search Jobs color */}
              <h4 style={{ color: "#60a5fa" }}>Search Jobs</h4> {/* Light blue color for heading */}
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Search by title, company, or location..."
                value={searchQuery}
                onChange={handleSearch}
                style={{
                  borderRadius: "10px",
                  border: "1px solid #60a5fa", // Same color for input border
                }}
              />
              <div>
                {/* Change About This Page text color */}
                <h5 style={{ color: "#60a5fa" }}>About This Page</h5> {/* Light blue color */}
                <p
                  className="text-light"
                  style={{
                    color: "#f8f9fa", // Light gray color for paragraph text
                  }}
                >
                  Find your dream job from a wide range of listings. Use the
                  search bar above to filter jobs by title, company, or
                  location. Apply instantly!
                </p>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="col-md-8">
            <div className="row">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <div
                    className="col-lg-6 col-md-12 mb-4"
                    key={job.id}
                    onMouseEnter={() => setHoveredCard(job.id)} // Set the hovered card
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div
                      className="card shadow-sm border-0 h-100"
                      style={{
                        transition: "transform 0.3s, boxShadow 0.3s",
                        transform:
                          hoveredCard === job.id ? "scale(1.05)" : "scale(1)",
                        boxShadow:
                          hoveredCard === job.id
                            ? "0 4px 15px rgba(0, 0, 0, 0.2)"
                            : "none",
                        background:
                          "linear-gradient(to bottom, #1f1f23, #434b4d)",
                        borderRadius: "10px",
                      }}
                    >
                      <div className="card-body d-flex flex-column">
                        <p className="card-text text-light">
                          <strong>Name:</strong>{" "}
                          {job.name ? job.name : "Name not specified"}
                        </p>
                        <p className="card-text text-light">
                          <strong>Location:</strong>{" "}
                          {job.location ? job.location : "Location not specified"}
                        </p>
                        <p className="card-text text-light flex-grow-1">
                          <strong>Description:</strong>{" "}
                          {job.description
                            ? `${job.description.substring(0, 60)}...`
                            : "No description available."}
                        </p>
                        <button
                          className="btn btn-primary mt-2"
                          onClick={() => handleApply(job.id)}
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center">
                  <p className="text-muted">
                    No jobs found. Try adjusting your search!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
