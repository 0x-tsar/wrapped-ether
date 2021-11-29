// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WrappedEther is ERC20 {
    uint256 public totalSupplyWether = 0;

    constructor() ERC20("WRAPPED ETHER", "WETH") {}

    function mint() public payable {
        _mint(msg.sender, msg.value);
        totalSupplyWether += msg.value;
    }

    function withdraw(uint256 amount) public {
        require(
            amount <= balanceOf(msg.sender),
            'You don"t own that amount of Ethers'
        );

        payable(msg.sender).transfer(amount);
        totalSupplyWether -= amount;
    }
}
