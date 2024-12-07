import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import homeImage from "../images/home.jpg"; // Adjust the image path
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
import 'bootstrap-icons/font/bootstrap-icons.css'; // Bootstrap Icons styles
import './Home.css'; // Your custom styles


function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const message = location.state?.message;

  useEffect(() => {
    AOS.init();
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${homeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white",
      }}
      className="d-flex flex-column"
    >
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light glass-effect shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold text-primary" href="/">
            Job Portal
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  className="btn btn-primary me-2"
                  onClick={() => handleNavigation("/About")}
                >
                  About Us
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-primary me-2"
                  onClick={() => handleNavigation("/Contact")}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-5 flex-grow-1">
        {message && <div className="alert alert-warning">{message}</div>}

        <div className="text-center">
          <h1
            className="display-4 fw-bold"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Welcome to the Job Portal
          </h1>
          <p
            className="lead text-light"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Your one-stop solution for job opportunities.
          </p>
          <button
            className="btn btn-lg btn-warning mt-4"
            onClick={() => handleNavigation("/register")}
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Get Started
          </button>

          {/* Paragraph About the Job Portal */}
          <p
            className="mt-4 text-light"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            The Online Job Portal is a comprehensive platform designed to bridge
            the gap between job seekers and employers. Whether you're a recent
            graduate searching for your first job or an experienced professional
            looking for new opportunities, our portal provides a seamless
            experience for finding your next career move. Employers can post job
            listings, review applicant profiles, and connect with top talent
            across various industries. Job seekers can explore a wide range of
            opportunities, apply directly through the platform, and keep track
            of their applications. With advanced search filters, personalized
            job recommendations, and an intuitive interface, the Online Job
            Portal simplifies the job search and hiring process for everyone.
          </p>
        </div>

        {/* Login Options */}
        <div className="d-flex justify-content-center mt-5">
          <div className="card mx-3" style={{ width: "18rem" }}>
            <div className="card-body text-center">
              <h5 className="card-title">Admin Login</h5>
              <button
                className="btn btn-primary"
                onClick={() => handleNavigation("/loginadmin")}
              >
                Login
              </button>
            </div>
          </div>
          <div className="card mx-3" style={{ width: "18rem" }}>
            <div className="card-body text-center">
              <h5 className="card-title">User Login</h5>
              <button
                className="btn btn-success"
                onClick={() => handleNavigation("/loginuser")}
              >
                Login
              </button>
            </div>
          </div>
          <div className="card mx-3" style={{ width: "18rem" }}>
            <div className="card-body text-center">
              <h5 className="card-title">Recruiter Login</h5>
              <button
                className="btn btn-warning"
                onClick={() => handleNavigation("/loginrecruiter")}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="glass-effect text-center py-3 mt-auto">
        <p className="mb-0 text-dark">
          &copy; {new Date().getFullYear()} Job Portal. All Rights Reserved.
        </p>
      </footer>

      {/* Scroll to Top Button */}
      <button
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.5rem",
          cursor: "pointer",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </div>
  );
}

export default Home;
