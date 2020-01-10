**solidity-typescript-starter**

Auto generated typescript interfaces based on solidity smart contract abi.


**Development of contracts**

This will run a gulp task to compile the `.sol` files using solc compiler into the `./abis` folder

Linux
```
  gulp watch
```

**Building**

This will clean and build new contract interfaces using the Algernon library, and write the interfaces to the `./algernon` folder.

```
npm run build
```


**Testing**

Contract tests are in the  `./spec` folder, run the following to test your contract after you have built the contracts and parsed the Typescript interfaces.

```
  npm run test
```

Licence : MIT