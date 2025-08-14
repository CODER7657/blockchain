# Blockchain Certificate DApp

A decentralized platform for issuing and verifying digital certificates on the Polygon Amoy testnet.
Built with Solidity, React.js, and ethers.js—using MetaMask for wallet-based authentication and transaction signing.

## Table of Contents

- [Overview](#overview)
- [Smart Contract Features](#smart-contract-features)
- [Frontend Architecture](#frontend-architecture)
- [Installation & Setup](#installation-setup)
- [How to Run the Project](#how-to-run-the-project)
- [Usage Flow](#usage-flow)
- [Security Notes](#security-notes)
- [Contributing](#contributing)
- [License](#license)

## Overview

This DApp enables secure, on-chain certificate issuing and public validation for organizations.
It works on Polygon Amoy testnet and uses MetaMask exclusively for signing transactions.

- **Smart contract (VeriServe)** securely stores certificates
- **React frontend** with protected admin panel and verification page
- **MetaMask wallet integration**—no private keys are ever stored or exposed in code

## Smart Contract Features (VeriServe.sol)

- **Issue certificates:** Add a certificate with a unique ID, hash, and recipient address
- **Public verification:** Anyone can check a certificate by ID plus hash (returns true/false)
- **Immutable record:** All certificates stored on-chain for auditability

| Function | Purpose |
|----------|----------|
| `issueCertificate(_certId, _certHash, _to)` | Issues new certificate |
| `verifyCertificate(_certId, _certHash)` | Checks validity of a certificate |
| `certificates(_certId)` | Returns details for given cert ID |

## Frontend Architecture

- **App.js:** Routing, navbar, session logic (admin/public separation)
- **Login.js:** Password authentication for admin ("admin123" for demo)
- **CertificateForm.js:** Admin-only, issues certificates via MetaMask signing
- **IssuedCertificates.js:** Displays locally issued certificates (from browser session)
- **VerifyCertificate.js:** Public page for on-chain certificate verification
- **WalletConnect.js:** Handles MetaMask connection in UI
- **config.js:** Deployed contract address and ABI for Polygon Amoy

### Network Configuration

- **Testnet:** Polygon Amoy (chainId: 80002)
- **RPC URL:** https://rpc-amoy.polygon.technology/
- **Block Explorer:** [Amoy Polygonscan](https://amoy.polygonscan.com/)
- **Contract Address:** Update with your latest deployment!
- **Test MATIC:** Get from [Polygon Faucet](https://faucet.polygon.technology/) for Amoy network

## Installation & Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/CODER7657/VeriServe_block.git
   cd VeriServe_block
   ```

2. **Install Project Dependencies:**
   ```bash
   npm install
   ```

3. **Deploy the Smart Contract:**
   - Use Remix or Hardhat to deploy on Polygon Amoy testnet
   - After deploying the smart contract, update `config.js`:
     - Place the ABI JSON for the deployed contract in `config.js` or import from artifacts
     - Set `contractAddress` to your deployed Polygon Amoy address

4. **Add Polygon Amoy to MetaMask:**
   - Network Name: Polygon Amoy Testnet
   - RPC: https://rpc-amoy.polygon.technology/
   - Chain ID: 80002
   - Currency: MATIC
   - Block Explorer: https://amoy.polygonscan.com/
   - Request MATIC from [Polygon Faucet](https://faucet.polygon.technology/)

## How to Run the Project

1. **Start the Frontend:**
   ```bash
   npm start
   ```
   App runs at http://localhost:3000

2. **Connect MetaMask:**
   - Ensure MetaMask is set to Polygon Amoy
   - Approve wallet connection requests prompted by the app

3. **Admin Login & Certificate Issuance:**
   - Login (password: admin123 for demo)
   - Issue certificates via web form; MetaMask will sign transactions

4. **Verification:**
   - Open /verify page and input certificate details to validate

## Usage Flow

### Admin

- Login via main page
- Connect MetaMask
- Issue certificates (MetaMask signing required)
- View session-issued certificates (local table)

### Public

- Open /verify
- Enter certificate ID and hash
- Instant authentic/invalid result using blockchain contract

## Security Notes

- No private keys are stored or exposed anywhere in the code.
- MetaMask is required for signing all transactions and certificate operations.
- Demo admin password ("admin123")—replace with secure authentication for real deployments.
- Local certificate table is only for convenience; use contract for true auditing.
- Smart contract currently allows open certificate issuance—add access control before deploying on mainnet.

## Contributing

Contributions and suggestions are welcome! Open issues or submit PRs to enhance features, documentation, or security.

## License

MIT License

Copyright (c) 2024 CODER7657

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
