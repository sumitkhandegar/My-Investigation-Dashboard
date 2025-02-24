import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Feb 18", amount: 1200 },
  { name: "Feb 19", amount: 2500 },
  { name: "Feb 20", amount: 3200 },
  { name: "Feb 21", amount: 1900 }
];

const CryptoChart: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}>
        Crypto Transactions
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="amount" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CryptoChart;