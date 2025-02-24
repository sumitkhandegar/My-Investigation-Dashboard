// @ts-nocheck
import React from "react";
import { useTable } from "react-table";

interface Threat {
  id: number;
  threatType: string;
  severity: string;
  reportedAt: string;
}

const data: Threat[] = [
  { id: 1, threatType: "Phishing", severity: "High", reportedAt: "2024-02-21" },
  { id: 2, threatType: "Data Leak", severity: "Medium", reportedAt: "2024-02-19" },
  { id: 3, threatType: "Ransomware", severity: "Critical", reportedAt: "2024-02-18" }
];

const ThreatTable: React.FC = () => {
  const columns = React.useMemo(
    () => [
      { Header: "Threat Type", accessor: "threatType" },
      { Header: "Severity", accessor: "severity" },
      { Header: "Reported At", accessor: "reportedAt" }
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

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
        Dark Web Threats
      </h3>
      <table {...getTableProps()} style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} style={{ backgroundColor: "#f3f4f6" }}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} style={{ padding: "8px", textAlign: "left" }}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} style={{ borderTop: "1px solid #ddd" }}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} style={{ padding: "8px" }}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ThreatTable;
