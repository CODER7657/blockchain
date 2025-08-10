<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
</head>
<body>

  <h1>Blockchain Certificate DApp</h1>
  <p>A decentralized platform for issuing and verifying digital certificates on the Polygon Amoy testnet.<br>
  Built with Solidity, React.js, and ethers.js—using MetaMask for wallet-based authentication and transaction signing.</p>

  <h2>Table of Contents</h2>
  <ul>
    <li><a href="#overview">Overview</a></li>
    <li><a href="#smart-contract-features">Smart Contract Features</a></li>
    <li><a href="#frontend-architecture">Frontend Architecture</a></li>
    <li><a href="#installation-setup">Installation &amp; Setup</a></li>
    <li><a href="#how-to-run-the-project">How to Run the Project</a></li>
    <li><a href="#usage-flow">Usage Flow</a></li>
    <li><a href="#security-notes">Security Notes</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ul>

  <h2 id="overview">Overview</h2>
  <p>
    This DApp enables secure, on-chain certificate issuing and public validation for organizations.<br>
    It works on Polygon Amoy testnet and uses MetaMask exclusively for signing transactions.
  </p>
  <ul>
    <li>Smart contract (VeriServe) securely stores certificates</li>
    <li>React frontend with protected admin panel and verification page</li>
    <li>MetaMask wallet integration—no private keys are ever stored or exposed in code</li>
  </ul>

  <h2 id="smart-contract-features">Smart Contract Features (<code>VeriServe.sol</code>)</h2>
  <ul>
    <li><b>Issue certificates:</b> Add a certificate with a unique ID, hash, and recipient address</li>
    <li><b>Public verification:</b> Anyone can check a certificate by ID plus hash (returns true/false)</li>
    <li><b>Immutable record:</b> All certificates stored on-chain for auditability</li>
  </ul>
  <table border="1">
    <tr><th>Function</th><th>Purpose</th></tr>
    <tr><td><code>issueCertificate(_certId, _certHash, _to)</code></td><td>Issues new certificate</td></tr>
    <tr><td><code>verifyCertificate(_certId, _certHash)</code></td><td>Checks validity of a certificate</td></tr>
    <tr><td><code>certificates(_certId)</code></td><td>Returns details for given cert ID</td></tr>
  </table>

  <h2 id="frontend-architecture">Frontend Architecture</h2>
  <ul>
    <li><b>App.js:</b> Routing, navbar, session logic (admin/public separation)</li>
    <li><b>Login.js:</b> Password authentication for admin ("admin123" for demo)</li>
    <li><b>CertificateForm.js:</b> Admin-only, issues certificates via MetaMask signing</li>
    <li><b>IssuedList.js:</b> Displays locally issued certificates (from browser session)</li>
    <li><b>VerifyCertificate.js:</b> Public page for on-chain certificate verification</li>
    <li><b>WalletConnect.js:</b> Handles MetaMask connection in UI</li>
    <li><b>config.js:</b> Deployed contract address and ABI for Polygon Amoy</li>
  </ul>

  <h3>Network Configuration</h3>
  <ul>
    <li><b>Testnet:</b> Polygon Amoy (chainId: 80002)</li>
    <li><b>RPC URL:</b> https://rpc-amoy.polygon.technology/</li>
    <li><b>Block Explorer:</b> <a href="https://amoy.polygonscan.com/">Amoy Polygonscan</a></li>
    <li><b>Contract Address:</b> <i>Update with your latest deployment!</i></li>
  </ul>

  <h2 id="installation-setup">Installation & Setup</h2>
  <ol>
    <li><b>Clone the Repository:</b><br>
      <code>git clone https://github.com/CODER7657/blockchain.git</code><br>
      <code>cd blockchain</code>
    </li>
    <li><b>Install Project Dependencies:</b><br>
      <code>npm install</code>
    </li>
    <li><b>Deploy the Smart Contract:</b><br>
      Use Hardhat or Remix with Polygon Amoy.<br>
      Update <code>config.js</code> with your contract address and ABI.
    </li>
    <li><b>Add Polygon Amoy to MetaMask:</b><br>
      Network Name: Polygon Amoy Testnet<br>
      RPC: <code>https://rpc-amoy.polygon.technology/</code><br>
      Chain ID: <code>80002</code><br>
      Currency: <code>MATIC</code><br>
      Block Explorer: <code>https://amoy.polygonscan.com/</code><br>
      Request MATIC from <a href="https://faucet.polygon.technology/">Polygon Faucet</a>
    </li>
  </ol>

  <h2 id="how-to-run-the-project">How to Run the Project</h2>
  <ol>
    <li><b>Start the Frontend:</b>
      <pre><code>npm start</code></pre>
      App runs at <code>http://localhost:3000</code>
    </li>
    <li><b>Connect MetaMask:</b>
      <ul>
        <li>Ensure MetaMask is set to Polygon Amoy</li>
        <li>Approve wallet connection requests prompted by the app</li>
      </ul>
    </li>
    <li><b>Admin Login &amp; Certificate Issuance:</b>
      <ul>
        <li>Login (password: <code>admin123</code> for demo)</li>
        <li>Issue certificates via web form; MetaMask will sign transactions</li>
      </ul>
    </li>
    <li><b>Verification:</b>
      <ul>
        <li>Open <code>/verify</code> page and input certificate details to validate</li>
      </ul>
    </li>
  </ol>

  <h2 id="usage-flow">Usage Flow</h2>
  <h3>Admin</h3>
  <ul>
    <li>Login via main page</li>
    <li>Connect MetaMask</li>
    <li>Issue certificates (MetaMask signing required)</li>
    <li>View session-issued certificates (local table)</li>
  </ul>

  <h3>Public</h3>
  <ul>
    <li>Open <code>/verify</code></li>
    <li>Enter certificate ID and hash</li>
    <li>Instant authentic/invalid result using blockchain contract</li>
  </ul>

  <h2 id="security-notes">Security Notes</h2>
  <ul>
    <li><b>No private keys are stored or exposed anywhere in the code.</b></li>
    <li>MetaMask is required for signing all transactions and certificate operations.</li>
    <li>Demo admin password ("admin123")—replace with secure authentication for real deployments.</li>
    <li>Local certificate table is only for convenience; use contract for true auditing.</li>
    <li>Smart contract currently allows open certificate issuance—add access control before deploying on mainnet.</li>
  </ul>

  <h2 id="contributing">Contributing</h2>
  <p>Contributions and suggestions are welcome! Open issues or submit PRs to enhance features, documentation, or security.</p>

  <h2 id="license">License</h2>
  <pre>
MIT License

Copyright (c) 2024 CODER7657

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
  </pre>

</body>
</html>
