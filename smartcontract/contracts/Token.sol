// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor(uint256 initialSupply) ERC20("Geepy", "GPY") {
        _mint(msg.sender, initialSupply);
    }

    function transfertowallet(address recipient, uint256 amount) public {
        transfer(recipient, amount);
    }
}
