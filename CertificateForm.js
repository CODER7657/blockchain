import React, { useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "./config";

const CertificateForm = () => {
  const [certId, setCertId] = useState("");
  const [certHash, setCertHash] = useState("");

  const handleIssue = async () => {
    try {
      if (!certId.trim() || !certHash.trim()) {
        alert("❌ Please fill all fields");
        return;
      }
  
      if (!window.ethereum) {
        alert("🦊 MetaMask is required.");
        return;
      }
  
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
  
      const address = await signer.getAddress();
      const tx = await contract.issueCertificate(certId, certHash, address);
      await tx.wait();
  
      // ✅ Save issued certificate details locally
      const previous = JSON.parse(localStorage.getItem("issuedCerts") || "[]");
      const newEntry = {
        certId: certId.trim(),
        certHash: certHash.trim(),
        issuedTo: address,
        issuedAt: new Date().toLocaleString(),
      };
      localStorage.setItem("issuedCerts", JSON.stringify([newEntry, ...previous]));
  
      alert("✅ Certificate issued successfully!");
      setCertId("");
      setCertHash("");
    } catch (error) {
      console.error("❌ Error issuing certificate:", error);
      alert("Something went wrong while issuing the certificate.");
    }
  };
  

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>📝 Issue Certificate</h2>
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
          placeholder="Student Name / Event Name / Hash"
          value={certHash}
          onChange={(e) => setCertHash(e.target.value)}
        />
        <button style={styles.button} onClick={handleIssue}>
          Issue Certificate
        </button>
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
  },
  card: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    width: "350px",
    textAlign: "center",
  },
  heading: {
    marginBottom: "1rem",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default CertificateForm;
