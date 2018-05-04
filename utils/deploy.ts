import * as fs from 'fs';
import * as abi from '../build/contracts/Contract.json';
import { readFileSync } from "fs";
import { join } from "path";
import { web3, getAccounts } from '../utils/web3';

export const deploy = async (contractName: string) => {
  const dirPath = join(__dirname, "../abis");
  const fileName = `${contractName}_sol_${contractName}`;
  const abi = JSON.parse(readFileSync(join(dirPath, fileName + ".abi"), "utf-8"));
  const bin = readFileSync(join(dirPath, fileName + ".bin"), "utf-8");
  const code = "0x" + bin;
  const accounts = await getAccounts();
  const contract = new web3.eth.Contract(abi, { from: accounts[0] });
  const createdContract = await contract.deploy({ data: code }).send({
    from: accounts[0],
    gas: '1000000'
  });
  return createdContract;
}
