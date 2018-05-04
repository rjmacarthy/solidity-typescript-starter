import * as ganache from "ganache-cli";
var Web3 = require('web3');
export var web3 = new Web3(ganache.provider());

export const getAccounts = async () => {
  return await web3.eth.getAccounts();
}

