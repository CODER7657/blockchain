export const contractAddress = "0xE29410018B2A20a58171BDB84Ce5969CC7CBC6e4";

export const contractABI =  [
   {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "certificates",
      "outputs": [
        {
          "internalType": "address",
          "name": "issuedTo",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "certHash",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_certId",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_certHash",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        }
      ],
      "name": "issueCertificate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_certId",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_certHash",
          "type": "string"
        }
      ],
      "name": "verifyCertificate",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    } ]