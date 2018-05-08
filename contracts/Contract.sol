pragma solidity ^0.4.23;
import './Ownable.sol';

contract Contract is Ownable {
    
    constructor () public {
        _owner = msg.sender;
    }

    function incrementCounter () public isOwner returns(uint) {
        counter = counter + 1;
        return counter;
    }

    function getName () view public returns (string) {
        return _name;
    }

     function setName (string name) public returns (string, uint) {
        _name = name;
        return (_name, 1);
    }
}