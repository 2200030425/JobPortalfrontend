import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import contactImage from "../images/contact.jpg"; // Replace with your image path

function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${contactImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header Section */}
      <header style={{ textAlign: "center", padding: "50px 20px" }}>
        <h1
          style={{ fontWeight: "bold", fontSize: "3.5rem" }}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Get in Touch
        </h1>
        <p
          style={{ fontSize: "1.2rem", color: "#f8f9fa" }}
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          We're here to connect and assist. Reach out to us anytime!
        </p>
      </header>

      {/* Contact Information Section */}
      <div className="container mt-4" style={{ flexGrow: 1 }}>
        <div className="row text-center text-md-start">
          {/* Address */}
          <div
            className="col-md-4 mb-4"
            data-aos="fade-right"
            data-aos-duration="1000"
            style={{ padding: "20px" }}
          >
            <h3 style={{ fontWeight: "bold", color: "#ffc107" }}>Office Address</h3>
            <p style={{ fontSize: "1rem" }}>
              123 Job Portal Lane, <br />
              Silicon Valley, CA 94043, <br />
              United States.
            </p>
          </div>

          {/* Email */}
          <div
            className="col-md-4 mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            style={{ padding: "20px" }}
          >
            <h3 style={{ fontWeight: "bold", color: "#28a745" }}>Email Us</h3>
            <p style={{ fontSize: "1rem" }}>
              support@jobportal.com <br />
              info@jobportal.com
            </p>
          </div>

          {/* Phone */}
          <div
            className="col-md-4 mb-4"
            data-aos="fade-left"
            data-aos-duration="1000"
            style={{ padding: "20px" }}
          >
            <h3 style={{ fontWeight: "bold", color: "#007bff" }}>Call Us</h3>
            <p style={{ fontSize: "1rem" }}>
              +1 (800) 123-4567 <br />
              +1 (800) 987-6543
            </p>
          </div>
        </div>
      </div>

      {/* Additional Details Section */}
      <div
        className="container text-center"
        style={{
          padding: "30px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "10px",
          marginTop: "20px",
          maxWidth: "800px",
        }}
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h3 style={{ fontWeight: "bold", color: "#f8f9fa" }}>
          Operating Hours
        </h3>
        <p style={{ fontSize: "1rem", color: "#f8f9fa" }}>
          Monday - Friday: 9:00 AM to 6:00 PM <br />
          Saturday: 10:00 AM to 4:00 PM <br />
          Sunday: Closed
        </p>
        <p style={{ fontSize: "1rem", color: "#f8f9fa" }}>
          Follow us on our social media platforms for the latest updates and job
          opportunities.
        </p>
        <div style={{ fontSize: "1.5rem" }}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4267B2", margin: "0 10px" }}
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1DA1F2", margin: "0 10px" }}
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0077b5", margin: "0 10px" }}
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#C13584", margin: "0 10px" }}
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "20px 10px",
          background: "#000",
          color: "#f8f9fa",
          marginTop: "auto",
        }}
      >
        &copy; {new Date().getFullYear()} Job Portal. All Rights Reserved.
      </footer>
    </div>
  );
}

export default Contact;
