pragma solidity ^0.5.4;
import "./Ownable.sol";

contract Contract is Ownable {
    
    constructor () public {
        _owner = msg.sender;
    }

    function incrementCounter () public isOwner returns(uint) {
        counter = counter + 1;
        return counter;
    }

    function getName () public view returns (string memory) {
        return _name;
    }

    function setName (string memory name) public returns (string memory, uint) {
        _name = name;
        return (_name, 1);
    }
}