import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div
      style={{
        width: "256px",
        backgroundColor: "#1a202c",
        color: "white",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>
        SPYINT Dashboard
      </h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li
          style={{
            marginBottom: "8px",
            padding: "8px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#2d3748")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          Dashboard
        </li>
        <li
          style={{
            marginBottom: "8px",
            padding: "8px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#2d3748")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          Threats
        </li>
        <li
          style={{
            marginBottom: "8px",
            padding: "8px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#2d3748")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          Crypto
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;