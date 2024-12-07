import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./admin.css";

const AdminPage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [recruiters, setRecruiters] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("users");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, recruitersResponse, jobsResponse] = await Promise.all([
          axios.get("http://localhost:8080/users"),
          axios.get("http://localhost:8080/recruiters"),
          axios.get("http://localhost:8080/jobs"),
        ]);

        setUsers(usersResponse.data);
        setRecruiters(recruitersResponse.data);
        setJobs(jobsResponse.data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    navigate("/");
  };

  const handleSearch = (data) => {
    return data.filter((item) => {
      const fields =
        activeSection === "jobs" ? ["name", "company", "location"] : ["firstName", "lastName", "email"];
      return fields.some((key) =>
        item[key]?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  };

  const paginatedData = (data) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  };

  const filteredData =
    activeSection === "users"
      ? handleSearch(users)
      : activeSection === "recruiters"
      ? handleSearch(recruiters)
      : handleSearch(jobs);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <h1>Admin Page</h1>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

      <div className="navigation">
        <button
          className={`nav-btn ${activeSection === "users" ? "active" : ""}`}
          onClick={() => setActiveSection("users")}
        >
          Users
        </button>
        <button
          className={`nav-btn ${activeSection === "recruiters" ? "active" : ""}`}
          onClick={() => setActiveSection("recruiters")}
        >
          Recruiters
        </button>
        <button
          className={`nav-btn ${activeSection === "jobs" ? "active" : ""}`}
          onClick={() => setActiveSection("jobs")}
        >
          Job Listings
        </button>
      </div>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder={`Search ${activeSection}`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-btn">Search</button>
      </div>

      <section>
        <h2>{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h2>
        <table>
          <thead>
            <tr>
              {activeSection === "users" || activeSection === "recruiters" ? (
                <>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Age</th>
                </>
              ) : (
                <>
                  <th>Job Title</th>
                  <th>Company</th>
                  <th>Location</th>
                  <th>Salary</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {paginatedData(filteredData).map((item, index) => (
              <tr key={index}>
                {activeSection === "users" || activeSection === "recruiters" ? (
                  <>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.age}</td>
                  </>
                ) : (
                  <>
                    <td>{item.name}</td>
                    <td>{item.company}</td>
                    <td>{item.location}</td>
                    <td>{item.salary}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page}
              className={`page-btn ${currentPage === page + 1 ? "active" : ""}`}
              onClick={() => setCurrentPage(page + 1)}
            >
              {page + 1}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminPage;
