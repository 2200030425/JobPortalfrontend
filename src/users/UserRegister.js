import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UserRegister() {
  const [user, setUser] = useState({
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
    user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let validationErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[1-9]\d{9}$/; // 10 digits, cannot start with 0
    const nameRegex = /^[A-Za-z]{3,}$/; // Only alphabetic characters, min length 3
    const passwordRegex = /^.{6,}$/; // Letters + numbers, min length 6

    if (!mobile || !mobileRegex.test(mobile)) {
      validationErrors.mobile =
        "Mobile number must be 10 digits and cannot start with 0.";
    }
    if (!firstName || !nameRegex.test(firstName)) {
      validationErrors.firstName =
        "First name must only contain letters and be at least 3 characters long.";
    }
    if (!lastName || !nameRegex.test(lastName)) {
      validationErrors.lastName =
        "Last name must only contain letters and be at least 3 characters long.";
    }
    if (!email || !emailRegex.test(email)) {
      validationErrors.email = "Invalid email format.";
    }
    if (!age || age < 18 || age > 100) {
      validationErrors.age = "Age must be between 18 and 100.";
    }
    if (!password || !passwordRegex.test(password)) {
      validationErrors.password =
        "Password must be at least 6 characters long";
    }
    if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return; // Stop submission if validation fails
    }

    try {
      const response = await axios.post("http://localhost:8080/user", user);
      if (response.status === 201) {
        alert("User registered successfully!");
        navigate("/user");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div
              className="card text-black"
              style={{
                borderRadius: "25px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div
                    className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1"
                    style={{
                      borderRadius: "15px",
                      backgroundColor: "#fff",
                      padding: "20px",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <input
                          type="tel"
                          name="mobile"
                          className="form-control"
                          placeholder="Mobile"
                          value={mobile}
                          onChange={handleChange}
                          required
                        />
                        {errors.mobile && (
                          <small className="text-danger">{errors.mobile}</small>
                        )}
                      </div>
                      <div className="mb-4">
                        <input
                          type="text"
                          name="firstName"
                          className="form-control"
                          placeholder="First Name"
                          value={firstName}
                          onChange={handleChange}
                          required
                        />
                        {errors.firstName && (
                          <small className="text-danger">
                            {errors.firstName}
                          </small>
                        )}
                      </div>
                      <div className="mb-4">
                        <input
                          type="text"
                          name="lastName"
                          className="form-control"
                          placeholder="Last Name"
                          value={lastName}
                          onChange={handleChange}
                          required
                        />
                        {errors.lastName && (
                          <small className="text-danger">{errors.lastName}</small>
                        )}
                      </div>
                      <div className="mb-4">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          value={email}
                          onChange={handleChange}
                          required
                        />
                        {errors.email && (
                          <small className="text-danger">{errors.email}</small>
                        )}
                      </div>
                      <div className="mb-4">
                        <input
                          type="number"
                          name="age"
                          className="form-control"
                          placeholder="Age"
                          value={age}
                          onChange={handleChange}
                          required
                        />
                        {errors.age && (
                          <small className="text-danger">{errors.age}</small>
                        )}
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          placeholder="Password"
                          value={password}
                          onChange={handleChange}
                          required
                        />
                        {errors.password && (
                          <small className="text-danger">
                            {errors.password}
                          </small>
                        )}
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          name="confirmPassword"
                          className="form-control"
                          placeholder="Confirm Password"
                          value={confirmPassword}
                          onChange={handleChange}
                          required
                        />
                        {errors.confirmPassword && (
                          <small className="text-danger">
                            {errors.confirmPassword}
                          </small>
                        )}
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                    style={{
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={require("../images/ur.jpg")}
                      className="img-fluid"
                      alt="Registration"
                      style={{
                        maxWidth: "100%",
                        borderRadius: "15px",
                        transform: "scale(0.9)",
                        transition: "transform 0.5s ease-in-out",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
