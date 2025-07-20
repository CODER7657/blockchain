import { useEffect, useState } from "react";
import { ethers } from "ethers";

export default function WalletConnect({ setWallet }) {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");

  useEffect(() => {
    const connect = async () => {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const addr = await signer.getAddress();
        setAddress(addr);
        setWallet({ provider, signer });
        setConnected(true);
      }
    };
    connect();
  }, []);

  return (
    <div style={{ marginBottom: "20px" }}>
      {connected ? (
        <p>✅ Connected: {address}</p>
      ) : (
        <button
          onClick={async () => {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            window.location.reload();
          }}
        >
          Connect MetaMask
        </button>
      )}
    </div>
  );
}
