// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;
import "./Ownable.sol";

contract Contract is Ownable {
    
    constructor () {
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