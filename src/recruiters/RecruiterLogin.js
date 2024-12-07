import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import recruiterLoginImg from "../images/recruiterLoginbgg.jpg";

export default function RecruiterLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegisterClick = () => {
    navigate("/registerRecruiter");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        `http://localhost:8080/recruiterlogin/${encodeURIComponent(
          email
        )}/${encodeURIComponent(password)}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("Login successful!");
        const recruiterId = response.data.id;
        localStorage.setItem("recruiterId", recruiterId);
        navigate("/recruiter");
      }
    } catch (error) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section
        style={{
          backgroundImage: `url(${recruiterLoginImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 5%",
          backgroundRepeat: "no-repeat",
          minHeight: "94vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          
        >
          <div style={{ flex: 1, textAlign: "center", color: "#334054" }}>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <h1>Job Portal</h1>
            <h5>Welcome, Recruiter!</h5>
            <br></br>
          </div>
          <form
            onSubmit={handleLogin}
            
          >
            <div className="form-outline mb-4">
              <input
                type="email"
                className="form-control form-control-lg shadow-sm"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Updates the email state
                required
                style={{
                  borderRadius: "10px",
                  border: "none",
                  padding: "10px",
                  transition: "0.3s ease",
                }}
                onFocus={(e) => (e.target.style.backgroundColor = "#e9f7ff")}
                onBlur={(e) => (e.target.style.backgroundColor = "#fff")}
              />
              <label className="form-label mt-2">Email</label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="password"
                className="form-control form-control-lg shadow-sm"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Updates the password state
                required
                style={{
                  borderRadius: "10px",
                  border: "none",
                  padding: "10px",
                  transition: "0.3s ease",
                }}
                onFocus={(e) => (e.target.style.backgroundColor = "#e9f7ff")}
                onBlur={(e) => (e.target.style.backgroundColor = "#fff")}
              />
              <label className="form-label mt-2">Password</label>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <div className="text-center mt-4">
            <button
  type="submit"
  className="btn btn-primary btn-lg"
  style={{
    padding: "10px 40px",
    borderRadius: "50px",
    border: "none",
    backgroundColor: "#445267",  // Updated color
    color: "#fff",  // Ensures the text is white
    transition: "all 0.3s ease-in-out",
  }}
  disabled={loading}
  onMouseEnter={(e) =>
    (e.target.style.backgroundColor = "#839aba")  // Hover color updated
  }
  onMouseLeave={(e) =>
    (e.target.style.backgroundColor = "#445267")  // Reset to initial color
  }
>
  {loading ? "Logging in..." : "Login"}
</button>
              <p className="small fw-bold mt-3">
                Don't have an account?{" "}
                <button
                  className="btn btn-link text-danger p-0"
                  style={{ textDecoration: "none" }}
                  onClick={handleRegisterClick} // Ensures the register button works
                >
                  <div style={{ flex: 1, textAlign: "center", color: "#334054" }}>
                  Register
                  
                  </div>
                  
                </button>
              </p>
            </div>
          </form>
        </div>
      </section>

      <footer
        style={{
          backgroundColor: "#b1bfd4",
          padding: "10px",
          position: "relative",
          bottom: "0",
          width: "100%",
          textAlign: "center",
        }}
      >
        <p className="mb-0 text-muted" >
          &copy; {new Date().getFullYear()} Job Portal. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}