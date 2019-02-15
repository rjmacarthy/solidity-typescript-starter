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

    function decrementCounter ()  public isOwner returns(uint) {
        counter = counter - 1;
        return counter;
    }

}