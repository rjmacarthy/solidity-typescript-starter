import * as fs from 'fs';
import { readFileSync } from "fs";
import { join } from "path";
import { forEach } from 'lodash';
import * as glob from 'glob';

var abis = glob.sync('abis/**/*.abi');

interface IAbi {
    constant: boolean,
    inputs: Array<any>,
    name: string,
    outputs: Array<any>,
    payable: boolean,
    stateMutability: string,
    type: string
}

var writeInterfaceMethods = (abis: Array<any>, fileName: any) => {
    var interfaceMethods = ``;
    abis.forEach((abi: IAbi) => {
        if (abi.name) {
            interfaceMethods += `${abi.name} : (${abi.inputs.map(x => x.name)}) => ${abi.outputs && abi.outputs.length ? 'IBaseMethods' : 'void'};`;
        }
    });
    return interfaceMethods;
}

var writeInterface = (abis: Array<any>, fileName: string) => {
    !fs.existsSync('./interfaces') && fs.mkdirSync('./interfaces/');
    fileName = fileName.replace('abis/', '');
    fileName = fileName.replace('.abi', '');
    let int = `
    export interface IBaseMethods {
        call: (options: any, callback?: Function) => Promise<any>,
        send: (options: any, callback?: Function) => Promise<any>,
        estimateGas: (options: any, callback?: Function) => Promise<any>,
        encodeABI: (options: any, callback?: Function) => Promise<any>
    }
    `
    int += `export interface I${fileName} { ${writeInterfaceMethods(abis, fileName)}}`;
    fs.writeFileSync(`./interfaces/${fileName + '.ts'}`, int);
}

forEach(abis, (path) => {
    var read = path;
    const json = fs.readFileSync(join(read), "utf-8");
    var abis = JSON.parse(json);
    writeInterface(abis, path);
});

