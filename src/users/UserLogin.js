import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const redirectToRegister = () => {
    navigate("/registeruser");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        `http://localhost:8080/userlogin/${email}/${password}`,
        null,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const { token, userId, email: userEmail } = response.data;

        localStorage.setItem("jwtToken", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("userEmail", userEmail);

        alert("Login successful!");
        navigate("/user");
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="background-radial-gradient overflow-hidden">
      <style>
        {`
          body, html {
            margin: 0;
            padding: 0;
          }

          .background-radial-gradient {
            background-color: hsl(218, 41%, 15%);
            background-image: radial-gradient(
              ellipse at center,
              hsl(218, 41%, 35%) 10%,
              hsl(218, 41%, 25%) 40%,
              hsl(218, 41%, 20%) 75%,
              transparent 100%
            );
            height: 100vh;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          #radius-shape-1 {
            height: 250px;
            width: 250px;
            top: -70px;
            left: -140px;
            background: radial-gradient(#7200a1, #d700ff);
            z-index: 1;
          }

          #radius-shape-2 {
            border-radius: 50%;
            bottom: -50px;
            right: -120px;
            width: 350px;
            height: 350px;
            background: radial-gradient(#7200a1, #d700ff);
            z-index: 1;
          }

          .bg-glass {
          background-color: #9da8ba; /* Your desired color */
          backdrop-filter: blur(20px);
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          z-index: 2;
          }

          .btn-primary {
            background-color: hsl(218, 81%, 55%);
            border: none;
            transition: all 0.3s ease-in-out;
          }

          .btn-primary:hover {
            background-color: hsl(218, 81%, 65%);
          }

          .form-outline input:focus {
            border-color: hsl(218, 81%, 65%);
            box-shadow: 0 0 8px hsl(218, 81%, 65%);
          }
        `}
      </style>

      <div className="container px-4 py-5 px-md-5 text-center text-lg-start">
        <div className="row gx-lg-5 align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 2 }}>
            <h1 className="display-5 fw-bold text-light">
              Welcome Back! <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>
                Log in to continue
              </span>
            </h1>
            <p className="text-light opacity-75">
              Log in to manage your profile and view your opportunities.
            </p>
          </div>

          <div className="col-lg-6 position-relative">
            <div id="radius-shape-1" className="position-absolute shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                <form onSubmit={handleLogin}>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <label className="form-label" htmlFor="email">
                      Email Address
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                  </div>

                  {error && <div className="alert alert-danger">{error}</div>}

                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Sign In"}
                  </button>

                  <div className="text-center">
                    <p>
                      Don't have an account?{" "}
                      <button
                        type="button"
                        className="btn btn-link"
                        onClick={redirectToRegister}
                      >
                        Sign Up
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserLogin;
