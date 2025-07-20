import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useNavigate } from "react-router-dom";

import CertificateForm from "./CertificateForm";
import VerifyCertificate from "./VerifyCertificate";
import IssuedCertificates from "./IssuedCertificates";

import Login from "./Login";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const storedLogin = localStorage.getItem("isAdmin");
    const loginTime = localStorage.getItem("loginTime");
    const expiryLimit = 15 * 60 * 1000; // 15 mins

    if (storedLogin === "true" && Date.now() - loginTime < expiryLimit) {
      setIsAdmin(true);
    } else {
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("loginTime");
    }
  }, []);

  const handleLogin = (value) => {
    setIsAdmin(value);
    localStorage.setItem("isAdmin", value);
    localStorage.setItem("loginTime", Date.now());
  };

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("loginTime");
    window.location.href = "/"; // force redirect to login
  };

  return (
    <Router>
      <nav style={styles.navbar}>
        <div style={styles.links}>
          <Link style={styles.link} to="/verify">🔍 Verify Certificate</Link>
          {!isAdmin && <Link style={styles.link} to="/">🔐 Admin Login</Link>}
          {isAdmin && <Link style={styles.link} to="/issue">📝 Issue Certificate</Link>}
          {isAdmin && <Link style={styles.link} to="/issued">📜 Issued Certs</Link>}

        </div>
        {isAdmin && (
          <button onClick={handleLogout} style={styles.logout}>
            🔓 Logout
          </button>
        )}
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            isAdmin ? <Navigate to="/issue" /> : <Login onLogin={handleLogin} />
          }
        />
        <Route
          path="/issue"
          element={isAdmin ? <CertificateForm /> : <Navigate to="/" />}
        />
        <Route path="/issued" element={isAdmin ? <IssuedCertificates /> : <Navigate to="/" />} />

        <Route path="/verify" element={<VerifyCertificate />} />
        <Route path="*" element={<Navigate to="/verify" />} />
      </Routes>
    </Router>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  links: {
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  logout: {
    backgroundColor: "#e74c3c",
    color: "#fff",
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default App;
