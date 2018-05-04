import { deploy } from '../utils/deploy';
import { expect, assert } from "chai";
import { web3, getAccounts } from '../utils/web3';

describe('Contract test', () => {
    let accounts: Array<string>;
    let methods : any;

    beforeEach(async () => {
        const deployed = await deploy('Contract');
        accounts = await getAccounts();
        methods = deployed.methods;
    });

    it('Can get the count', async function () {
        var counter = await methods.counter().call({ from: accounts[0] })
        expect(counter).to.equal('0');
    });

    it('Can can return a name', async function () {
        var name = await methods.getName().call({ from: accounts[0] })
        expect(name).to.equal('Hello');
    });

    it('Can implement the counter', async function () {
        var counter = await methods.counter().call({ from: accounts[0] })
        expect(counter).to.equal('0');
        var counter = await methods.incrementCounter().call({ from: accounts[0] })
        expect(counter).to.equal('1');
    });
})