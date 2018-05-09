export interface IBaseMethods {
    call: (options?: any, callback?: Function) => Promise<any>,
    send: (options: any, callback?: Function) => Promise<any>,
    estimateGas: (options?: any, callback?: Function) => Promise<any>,
    encodeABI: () => Promise<any>
}