import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImage from "../images/about.jpg"; // Replace with your actual image path

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${aboutImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white",
      }}
      className="d-flex flex-column"
    >
      {/* Header Section */}
      <header className="text-center py-5">
        <h1
          className="display-4 fw-bold"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          About Us
        </h1>
        <p
          className="lead"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          Connecting Talent with Opportunity
        </p>
      </header>

      {/* About Content */}
      <div className="container mt-4">
        <div className="row text-center text-md-start">
          {/* Vision Section */}
          <div
            className="col-md-4 mb-4"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h3 className="fw-bold text-warning">Our Vision</h3>
            <p>
              To revolutionize the way job seekers and employers connect by
              creating a platform where talent meets opportunity. We aim to
              become the go-to solution for careers worldwide.
            </p>
          </div>

          {/* Mission Section */}
          <div
            className="col-md-4 mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h3 className="fw-bold text-success">Our Mission</h3>
            <p>
              Empower job seekers to find their dream careers and help employers
              discover top talent with ease. We are dedicated to fostering
              professional growth and building stronger communities.
            </p>
          </div>

          {/* Values Section */}
          <div
            className="col-md-4 mb-4"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h3 className="fw-bold text-primary">Our Values</h3>
            <ul className="list-unstyled">
              <li>✔️ Integrity</li>
              <li>✔️ Innovation</li>
              <li>✔️ User-Centricity</li>
              <li>✔️ Diversity</li>
              <li>✔️ Excellence</li>
            </ul>
          </div>
        </div>

        {/* Features Section */}
        <div
          className="text-center mt-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="fw-bold text-light">Why Choose Us?</h2>
          <p className="text-light">
            Here's why our job portal stands out:
          </p>
        </div>

        <div className="row mt-4">
          <div
            className="col-md-6 mb-4"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="card glass-effect h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">Advanced Matching</h5>
                <p className="card-text">
                  We use AI-powered tools to match job seekers with the most
                  suitable roles and employers with the best candidates.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 mb-4"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="card glass-effect h-100">
              <div className="card-body">
                <h5 className="card-title text-success">User-Friendly Design</h5>
                <p className="card-text">
                  Our platform is intuitive and easy to navigate, making the
                  job search and hiring process seamless for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className="col-md-6 mb-4"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="card glass-effect h-100">
              <div className="card-body">
                <h5 className="card-title text-warning">Diverse Opportunities</h5>
                <p className="card-text">
                  From entry-level positions to executive roles, our portal
                  caters to professionals across all industries.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 mb-4"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="card glass-effect h-100">
              <div className="card-body">
                <h5 className="card-title text-danger">Dedicated Support</h5>
                <p className="card-text">
                  Our customer support team is here to assist you every step of
                  the way, ensuring a smooth experience for all users.
                </p>
              </div>
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
    </div>
  );
}

export default About;
