import React from "react";
import AnalyticsCard from "../components/AnalyticsCard";
import ThreatTable from "../components/ThreatTable";
import CryptoChart from "../components/CryptoChart";
import Sidebar from "../components/Sidebar";

const Dashboard: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "20%" }}>
        <Sidebar />
      </div>
      <div style={{ width: "80%", padding: "24px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>Dashboard</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px", marginBottom: "16px" }}>
          <AnalyticsCard title="Dark Web Threats" value="15" />
          <AnalyticsCard title="Crypto Transactions" value="$1.5M" />
          <AnalyticsCard title="Suspect Profiles" value="8" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
          <ThreatTable />
          <CryptoChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
