import { deploy } from '../utils/deploy';
import { expect, assert } from "chai";
import { web3, getAccounts } from '../utils/web3';
import { IContract_sol_Contract } from '../interfaces/Contract_sol_Contract';
import * as config from '../config';

describe('Contract spec', () => {
    let accounts: Array<string>;
    let methods: IContract_sol_Contract;

    before(async () => {
        const deployed = await deploy(config.CONTRACT_NAME);
        accounts = await getAccounts();
        methods = deployed.methods;
    });

    it('Can get the count', async function () {
        var counter = await methods.counter().call()
        expect(counter).to.equal('0');
    });

    it('Can get the name', async function () {
        var name = await methods.getName().call();
        expect(name).to.equal('Hello');
    });

    it('Can set a name correctly', async function () {
        var setName = await methods.setName('World').send({ from: accounts[0] });
        assert.isNotNull(setName);
        var name = await methods.getName().call();
        expect(name).to.equal('World');
    });

    it('Can hold the state', async function () {
        var name = await methods.getName().call();
        expect(name).to.equal('World');
    });

    it('Can increment the counter', async function () {
        var counter = await methods.counter().call();
        expect(counter).to.equal('0');
        var counter = await methods.incrementCounter().call();
        expect(counter).to.equal('1');
    });
})