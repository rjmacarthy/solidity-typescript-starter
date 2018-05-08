#!/bin/sh
npm run clean
cd contracts
solcjs *.sol --abi -o ../abis
solcjs *.sol --bin -o ../abis
cd ..
npm run parse
echo "Build complete!"