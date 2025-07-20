import React, { useEffect, useState } from "react";

const IssuedList = () => {
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("issuedCerts") || "[]");
    setCerts(stored);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>📄 Issued Certificates</h2>
        {certs.length === 0 ? (
          <p>No certificates issued yet.</p>
        ) : (
          <table style={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Hash / Name</th>
                <th>Issued To</th>
                <th>Issued At</th>
              </tr>
            </thead>
            <tbody>
              {certs.map((c, idx) => (
                <tr key={idx}>
                  <td>{c.certId}</td>
                  <td>{c.certHash}</td>
                  <td>{c.issuedTo}</td>
                  <td>{c.issuedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: "2rem",
  },
  card: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    width: "90%",
    maxWidth: "800px",
  },
  heading: {
    marginBottom: "1rem",
    color: "#333",
    textAlign: "center",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "0.75rem",
    border: "1px solid #ddd",
  },
  td: {
    padding: "0.75rem",
    border: "1px solid #ddd",
    textAlign: "center",
  },
};

export default IssuedList;
