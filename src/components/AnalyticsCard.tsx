import React from "react";

interface AnalyticsCardProps {
  title: string;
  value: string | number;
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ title, value }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <h3 style={{ fontSize: "18px", fontWeight: "600", margin: "0 0 8px 0" }}>
        {title}
      </h3>
      <p style={{ fontSize: "24px", fontWeight: "bold", color: "#1D4ED8", margin: 0 }}>
        {value}
      </p>
    </div>
  );
};

export default AnalyticsCard;
