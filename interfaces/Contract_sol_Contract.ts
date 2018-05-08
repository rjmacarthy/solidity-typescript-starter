
    export interface IBaseMethods {
        call: (options?: any, callback?: Function) => Promise<any>,
        send: (options?: any, callback?: Function) => Promise<any>,
        estimateGas: (options?: any, callback?: Function) => Promise<any>,
        encodeABI: (options?: any, callback?: Function) => Promise<any>
    }
    export interface IContract_sol_Contract { getName : () => IBaseMethods;incrementCounter : () => IBaseMethods;counter : () => IBaseMethods;setName : (name) => IBaseMethods;_name : () => IBaseMethods;}