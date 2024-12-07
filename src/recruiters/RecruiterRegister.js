import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import recruiterRegisterImg from "../images/recruiterregister.jpg";

export default function RecruiterRegister() {
  const [recruiter, setRecruiter] = useState({
    mobile: "",
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const { mobile, firstName, lastName, email, age, password, confirmPassword } =
    recruiter;

  const validateForm = () => {
    const newErrors = {};

    if (!/^\d{10}$/.test(mobile)) {
      newErrors.mobile = "Mobile number must be exactly 10 digits.";
    }

    if (!/^[A-Za-z]+$/.test(firstName)) {
      newErrors.firstName = "First Name must contain only alphabets.";
    } else if (firstName.length <= 3) {
      newErrors.firstName = "First Name must be more than 3 characters.";
    }
    
    if (!/^[A-Za-z]+$/.test(lastName)) {
      newErrors.lastName = "Last Name must contain only alphabets.";
    } else if (lastName.length <= 3) {
      newErrors.lastName = "Last Name must be more than 3 characters.";
    }
    
    if (firstName.toLowerCase() === lastName.toLowerCase()) {
      newErrors.lastName = "First Name and Last Name must not be the same.";
    }
    

    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
      newErrors.email = "Email must end with '@gmail.com'.";
    }

    if (!age || age < 18 || age > 100) {
      newErrors.age = "Age must be between 18 and 100.";
    }

    if (!/^[A-Za-z\d]{7,}$/.test(password)) {
      newErrors.password =
        "Password must be at least 7 characters long, containing only letters and numbers with no spaces.";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setRecruiter({ ...recruiter, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post(
        "http://localhost:8080/recruiter",
        recruiter
      );
      if (response.status === 201) {
        alert("Recruiter registered successfully!");
        navigate("/recruiter");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <section
      className="d-flex align-items-center justify-content-center"
      style={{
        height: "100vh",
        backgroundImage: `url(${recruiterRegisterImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center 29%",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      <div
        className="card text-black"
        style={{
          width: "350px",
          borderRadius: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          opacity: 0.8,
          marginTop: "50px",
        }}
      >
        <div className="card-body p-4">
          <h3 className="text-center fw-bold mb-4" style={{ color: "#121933" }}>
            Sign Up
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="tel"
                name="mobile"
                className={`form-control ${
                  errors.mobile ? "is-invalid" : ""
                }`}
                placeholder="Mobile"
                value={mobile}
                onChange={handleChange}
                required
              />
              {errors.mobile && (
                <div className="invalid-feedback">{errors.mobile}</div>
              )}
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="firstName"
                className={`form-control ${
                  errors.firstName ? "is-invalid" : ""
                }`}
                placeholder="First Name"
                value={firstName}
                onChange={handleChange}
                required
              />
              {errors.firstName && (
                <div className="invalid-feedback">{errors.firstName}</div>
              )}
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="lastName"
                className={`form-control ${
                  errors.lastName ? "is-invalid" : ""
                }`}
                placeholder="Last Name"
                value={lastName}
                onChange={handleChange}
                required
              />
              {errors.lastName && (
                <div className="invalid-feedback">{errors.lastName}</div>
              )}
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="Email"
                value={email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="mb-3">
              <input
                type="number"
                name="age"
                className={`form-control ${errors.age ? "is-invalid" : ""}`}
                placeholder="Age"
                value={age}
                onChange={handleChange}
                required
              />
              {errors.age && (
                <div className="invalid-feedback">{errors.age}</div>
              )}
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                placeholder="Password"
                value={password}
                onChange={handleChange}
                required
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="confirmPassword"
                className={`form-control ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleChange}
                required
              />
              {errors.confirmPassword && (
                <div className="invalid-feedback">
                  {errors.confirmPassword}
                </div>
              )}
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" required />
              <label
                className="form-check-label"
                style={{ color: "#121933" }}
              >
                I agree to the{" "}
                <a href="#!" style={{ color: "#121933" }}>
                  Terms of Service
                </a>
              </label>
            </div>
            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                style={{
                  backgroundColor: "#142141",
                  borderColor: "#142141",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#8da8ca")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#142141")
                }
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}