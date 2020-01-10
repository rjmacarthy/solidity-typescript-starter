import { readFileSync } from 'fs'
import { join } from 'path'
import { web3, getAccounts } from '../utils/web3'
import * as config from '../config'

export const deploy = async (contractName: string) => {
  const dirPath = join(__dirname, '../abis')
  const fileName = `${contractName}_sol_${contractName}`
  const bin = readFileSync(join(dirPath, fileName + '.bin'), 'utf-8')
  const code = '0x' + bin
  const accounts = await getAccounts()
  const contract = new web3.eth.Contract(
    JSON.parse(readFileSync(join(dirPath, fileName + '.abi'), 'utf-8')),
  )
  return await contract.deploy({ data: code }).send({
    from: accounts[0],
    gas: config.GAS,
  })
}
