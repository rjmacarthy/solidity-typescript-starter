pragma solidity ^0.4.17;


contract Base {
    address _owner;
    uint public counter = 0;
}


contract Ownable is Base {
    modifier isOwner {
        require(_owner == msg.sender);
        _;
    }
}

contract Contract is Ownable {
    
    function Contract () public {
        _owner = msg.sender;
    }

    function incrementCounter () public isOwner returns(uint) {
        counter = counter + 1;
        return counter;
    }

    function getName () pure public returns (string) {
        return "Hello";
    }
}