// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VeriServe {
    struct Certificate {
        address issuedTo;
        string certHash;
    }

    mapping(string => Certificate) public certificates;

    function issueCertificate(string memory _certId, string memory _certHash, address _to) public {
        certificates[_certId] = Certificate(_to, _certHash);
    }

    function verifyCertificate(string memory _certId, string memory _certHash) public view returns (bool) {
        return (keccak256(abi.encodePacked(certificates[_certId].certHash)) == keccak256(abi.encodePacked(_certHash)));
    }
}
