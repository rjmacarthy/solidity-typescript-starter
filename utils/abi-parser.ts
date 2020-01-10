import { join } from 'path'
import Algernon from 'algernon'
new Algernon({ path: join(__dirname, '../abis') }).parse()
