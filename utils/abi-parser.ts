
var Algernon = require('algernon');
import { join } from 'path';
new Algernon({ path: join(__dirname, '../abis') }).parse();