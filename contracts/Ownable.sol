pragma solidity ^0.5.4;
import "./Base.sol";

contract Ownable is Base {
    modifier isOwner {
        require(_owner == msg.sender);
        _;
    }
}