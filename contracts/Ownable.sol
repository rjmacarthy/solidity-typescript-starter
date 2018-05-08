pragma solidity ^0.4.23;
import './Base.sol';

contract Ownable is Base {
    modifier isOwner {
        require(_owner == msg.sender);
        _;
    }
}