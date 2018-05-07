#!/bin/sh
cd contracts
solcjs *.sol --abi -o ../abis
solcjs *.sol --bin -o ../abis
echo "Build complete!"