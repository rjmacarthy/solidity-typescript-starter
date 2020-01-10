import { deploy } from '../utils/deploy'
import { expect } from 'chai'
import { getAccounts } from '../utils/web3'
import { Contract } from '../algernon/Contract'
import * as config from '../config'

describe('Contract spec', () => {
  let accounts: Array<string>
  let methods: Contract

  before(async () => {
    const deployed = await deploy(config.CONTRACT_NAME)
    accounts = await getAccounts()
    methods = deployed.methods
  })

  it('Can get the count', async () => {
    const counter = await methods.counter().call()
    expect(counter).to.equal('0')
  })

  it('Can increment the count', async () => {
    await methods.incrementCounter().send({ from: accounts[0] })
    const counter = await methods.counter().call()
    expect(counter).to.equal('1')
  })

  it('Can decrement the count', async () => {
    await methods.decrementCounter().send({ from: accounts[0] })
    const counter = await methods.counter().call()
    expect(counter).to.equal('0')
  })
})
