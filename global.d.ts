declare module "ganache-cli";

declare module '*.json' {
    const value: any;
    export default value;
}

declare module '*.bin' {
    const value: any;
    export default value;
}