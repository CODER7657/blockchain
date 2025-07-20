import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "./config";

const VerifyCertificate = () => {
  const [certId, setCertId] = useState("");
  const [certHash, setCertHash] = useState("");
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    if (isValid !== null) {
      const timer = setTimeout(() => {
        setIsValid(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isValid]);

  const handleVerify = async () => {
    try {
      if (!window.ethereum) {
        alert("🦊 MetaMask is required.");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      const result = await contract.verifyCertificate(certId.trim(), certHash.trim());
      setIsValid(result);
    } catch (error) {
      console.error("Verification failed:", error);
      alert("Something went wrong. Check inputs and try again.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>🔍 Verify Certificate</h2>
        <input
          style={styles.input}
          type="text"
          placeholder="Certificate ID"
          value={certId}
          onChange={(e) => setCertId(e.target.value)}
        />
        <input
          style={styles.input}
          type="text"
          placeholder="Certificate Hash / Name / Event"
          value={certHash}
          onChange={(e) => setCertHash(e.target.value)}
        />
        <button style={styles.button} onClick={handleVerify}>
          ✅ Verify
        </button>

        {isValid !== null && (
          <div
            style={{
              ...styles.result,
              backgroundColor: isValid ? "#d4edda" : "#f8d7da",
              color: isValid ? "#155724" : "#721c24",
              borderColor: isValid ? "#c3e6cb" : "#f5c6cb",
            }}
          >
            {isValid ? "✅ Certificate is VALID" : "❌ Certificate is INVALID"}
          </div>
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
    background: "#f4f7fc",
    fontFamily: "'Poppins', sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    width: "90%",
    maxWidth: "400px",
    textAlign: "center",
  },
  heading: {
    marginBottom: "1rem",
    color: "#333",
    fontWeight: "600",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "1rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  result: {
    marginTop: "1rem",
    padding: "10px",
    borderRadius: "6px",
    fontWeight: "500",
    border: "1px solid",
  },
};

export default VerifyCertificate;
