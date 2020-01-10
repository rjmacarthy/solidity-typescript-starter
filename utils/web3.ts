import * as ganache from 'ganache-cli'
import Web3 from 'web3'
export const web3 = new Web3(ganache.provider())

export const getAccounts = async () => {
  return await web3.eth.getAccounts(()=>{})
}
