// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../Navbar";

// export default function ModernDashboard() {
//   const navigate = useNavigate();

//   const handleExploreClick = () => {
//     navigate("/user/jobs");
//   };

//   return (
//     <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
//       {/* Pass showJobs={false} to hide the Jobs button */}
//       <Navbar showJobs={false} />

//       {/* Main Section */}
//       <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "5% 10%" }}>
//         {/* Left Section: Text Content */}
//         <div style={{ flex: 1 }}>
//           <h1 style={{ fontSize: "3.5rem", fontWeight: "bold", color: "#2c2c54" }}>
//             From <span style={{ color: "#4caf50" }}>Pixels</span> to <span style={{ color: "#2196f3" }}>Possibilities</span>
//           </h1>
//           <p style={{ fontSize: "1.2rem", color: "#6c757d", margin: "20px 0" }}>
//             Manage your profile and explore exciting job opportunities tailored just for you.
//           </p>
//           <button
//             style={{
//               padding: "15px 30px",
//               fontSize: "1rem",
//               backgroundColor: "#007bff",
//               color: "#fff",
//               border: "none",
//               borderRadius: "30px",
//               cursor: "pointer",
//               marginTop: "20px",
//               boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//               transition: "all 0.3s ease",
//             }}
//             onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
//             onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
//             onClick={handleExploreClick}
//           >
//             Explore Now
//           </button>
//         </div>

//         {/* Right Section: Images */}
//         <div style={{ flex: 1, display: "flex", justifyContent: "center", position: "relative" }}>
//           {/* Mockup 1 */}
//           <img
//             src={require("../images/e.jpg")}
//             alt="Mobile Mockup 1"
//             style={{
//               position: "absolute",
//               top: "10%",
//               left: "20%",
//               width: "200px",
//               transform: "rotate(-10deg)",
//               boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
//               borderRadius: "10px",
//             }}
//           />
//           {/* Mockup 2 */}
//           <img
//             src={require("../images/uh.jpg")}
//             alt="Mobile Mockup 2"
//             style={{
//               position: "absolute",
//               top: "40%",
//               right: "10%",
//               width: "200px",
//               transform: "rotate(10deg)",
//               boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
//               borderRadius: "10px",
//             }}
//           />
//           {/* Mockup 3 */}
//           <img
//             src={require("../images/ur.jpg")}
//             alt="Mobile Mockup 3"
//             style={{
//               position: "absolute",
//               bottom: "10%",
//               left: "25%",
//               width: "200px",
//               transform: "rotate(-5deg)",
//               boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
//               borderRadius: "10px",
//             }}
//           />
//         </div>
//       </div>

//       {/* Footer Section */}
//       <div
//         style={{
//           textAlign: "center",
//           padding: "10px",
//           fontSize: "1rem",
//           color: "#dfd5d4",
//         }}
//       >
//         Designed for the Job Portal | User ID: 1
//       </div>
//     </div>
//   );
// }
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

export default function ModernDashboard() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/user/jobs");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${require("../images/ui.jpg")})`, // Add background image
        backgroundSize: "cover", // Ensure the image covers the entire page
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        position: "relative", // For overlay effects
        zIndex: 1,
      }}
    >
      {/* Optional: Add a semi-transparent overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Black with 50% opacity
          zIndex: 2,
        }}
      ></div>

      {/* Navbar and Content */}
      <div style={{ position: "relative", zIndex: 3 }}>
        {/* Pass showJobs={false} to hide the Jobs button */}
        <Navbar showJobs={false} />

        {/* Main Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "5% 10%",
          }}
        >
          {/* Left Section: Text Content */}
          <div style={{ flex: 1 }}>
            <h1
              style={{
                fontSize: "3.5rem",
                fontWeight: "bold",
                color: "#ffffff", // White text for contrast
              }}
            >
              From <span style={{ color: "#4caf50" }}>Pixels</span> to{" "}
              <span style={{ color: "#2196f3" }}>Possibilities</span>
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#d3d3d3",
                margin: "20px 0",
              }}
            >
              Manage your profile and explore exciting job opportunities
              tailored just for you.
            </p>
            <button
              style={{
                padding: "15px 30px",
                fontSize: "1rem",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
                marginTop: "20px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "#0056b3")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "#007bff")
              }
              onClick={handleExploreClick}
            >
              Explore Now
            </button>
          </div>

          {/* Right Section: Images */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Mockup 1 */}
            <img
              src={require("../images/e.jpg")}
              alt="Mobile Mockup 1"
              style={{
                position: "absolute",
                top: "10%",
                left: "20%",
                width: "200px",
                transform: "rotate(-10deg)",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                borderRadius: "10px",
              }}
            />
            {/* Mockup 2 */}
            <img
              src={require("../images/uh.jpg")}
              alt="Mobile Mockup 2"
              style={{
                position: "absolute",
                top: "40%",
                right: "10%",
                width: "200px",
                transform: "rotate(10deg)",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                borderRadius: "10px",
              }}
            />
            {/* Mockup 3 */}
            <img
              src={require("../images/ur.jpg")}
              alt="Mobile Mockup 3"
              style={{
                position: "absolute",
                bottom: "10%",
                left: "25%",
                width: "200px",
                transform: "rotate(-5deg)",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>

        {/* Footer Section */}
        <div
          style={{
            textAlign: "center",
            padding: "10px",
            fontSize: "1rem",
            color: "#dfd5d4",
          }}
        >

        </div>
      </div>
    </div>
  );
}
