
    export interface IBaseMethods {
        call: (options: any, callback?: Function) => Promise<any>,
        send: (options: any, callback?: Function) => Promise<any>,
        estimateGas: (options: any, callback?: Function) => Promise<any>,
        encodeABI: (options: any, callback?: Function) => Promise<any>
    }
    export interface IOwnable_sol_Ownable { counter : () => IBaseMethods;_name : () => IBaseMethods;}