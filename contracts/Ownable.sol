// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;
import "./Base.sol";

contract Ownable is Base {
    modifier isOwner {
        require(_owner == msg.sender);
        _;
    }
}