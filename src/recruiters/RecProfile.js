import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Navbar";
import Navbar from "../Navbar";

const RecProfile = () => {
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchUserDetails = async () => {
      const recruiterId = localStorage.getItem("recruiterId");

      if (!recruiterId) {
        setError("Recruiter not logged in");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:8080/recruiter/id/${recruiterId}`
        );
        setUserDetails(response.data);
        setFormData({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          age: response.data.age,
        });
        setLoading(false);
      } catch (err) {
        console.error("Error fetching user details:", err);
        setError("Failed to fetch profile details. Please try again later.");
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = async () => {
    try {
      const recruiterId = localStorage.getItem("recruiterId");
      const response = await axios.put(
        `http://localhost:8080/recruiter/update/${recruiterId}`,
        formData
      );
      setUserDetails({ ...userDetails, ...response.data });
      setIsEditing(false);
      setSuccessMessage("Profile updated!");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (err) {
      console.error("Error updating user details:", err);
      setError("Failed to save profile details. Please try again later.");
    }
  };

  if (loading) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          fontSize: "20px",
          color: "#4a4a4a",
        }}
      >
        Loading profile...
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          color: "#d9534f",
          textAlign: "center",
          fontSize: "18px",
          marginTop: "20px",
        }}
      >
        {error}
      </div>
    );
  }

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f0f4f8, #d9e8f5)",
        minHeight: "100vh",
        padding: "30px 15px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Navbar />
      <div className="container mt-5">
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#4a90e2",
            fontWeight: "bold",
          }}
        >
          Your Profile
        </h2>
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            overflow: "hidden",
            backgroundColor: "#fff",
          }}
        >
          <div
            style={{
              padding: "30px",
              textAlign: "center",
              backgroundColor: "#4a90e2",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Profile Details
          </div>
          <div style={{ padding: "20px" }}>
            {successMessage && (
              <div
                style={{
                  marginBottom: "15px",
                  padding: "10px",
                  color: "#28a745",
                  backgroundColor: "#eaf8f0",
                  borderRadius: "5px",
                  textAlign: "center",
                }}
              >
                {successMessage}
              </div>
            )}
            {isEditing ? (
              <div>
                <div style={{ marginBottom: "15px" }}>
                  <label style={{ display: "block", marginBottom: "5px" }}>
                    First Name
                  </label>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      transition: "border-color 0.3s",
                    }}
                    name="firstName"
                    value={formData.firstName || ""}
                    onChange={handleInputChange}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "#4a90e2")
                    }
                    onBlur={(e) => (e.target.style.borderColor = "#ccc")}
                  />
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <label style={{ display: "block", marginBottom: "5px" }}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      transition: "border-color 0.3s",
                    }}
                    name="lastName"
                    value={formData.lastName || ""}
                    onChange={handleInputChange}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "#4a90e2")
                    }
                    onBlur={(e) => (e.target.style.borderColor = "#ccc")}
                  />
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <label style={{ display: "block", marginBottom: "5px" }}>
                    Age
                  </label>
                  <input
                    type="number"
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      transition: "border-color 0.3s",
                    }}
                    name="age"
                    value={formData.age || ""}
                    onChange={handleInputChange}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "#4a90e2")
                    }
                    onBlur={(e) => (e.target.style.borderColor = "#ccc")}
                  />
                </div>
                <div style={{ textAlign: "center" }}>
                  <button
                    style={{
                      padding: "12px 30px",
                      marginRight: "10px",
                      backgroundColor: "#4a90e2",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      transition: "background-color 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#357ab7")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "#4a90e2")
                    }
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    style={{
                      padding: "12px 30px",
                      backgroundColor: "#6c757d",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      transition: "background-color 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#5a6268")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "#6c757d")
                    }
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p>
                  <strong>First Name:</strong> {userDetails.firstName}
                </p>
                <p>
                  <strong>Last Name:</strong> {userDetails.lastName}
                </p>
                <p>
                  <strong>Email:</strong> {userDetails.email}
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  {userDetails.mobile || "Not provided"}
                </p>
                <p>
                  <strong>Age:</strong> {userDetails.age || "Not provided"}
                </p>
                <div style={{ textAlign: "center" }}>
                  <button
                    style={{
                      padding: "12px 30px",
                      backgroundColor: "#4a90e2",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      transition: "background-color 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#357ab7")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "#4a90e2")
                    }
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecProfile;