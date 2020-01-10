pragma solidity ^0.6.1;
import "./Base.sol";

contract Ownable is Base {
    modifier isOwner {
        require(_owner == msg.sender);
        _;
    }
}