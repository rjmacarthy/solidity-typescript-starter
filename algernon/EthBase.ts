type PromiEventType = "transactionHash" | "receipt" | "confirmation" | "error";

export interface EthBase {
  call: (options?: any, callback?: Function) => Promise<PromiEvent<any>>,
  send: (options: any, callback?: Function) => Promise<any>,
  estimateGas: (options?: any, callback?: Function) => Promise<number>,
  encodeABI: () => Promise<number>
}

export default interface PromiEvent<T> extends Promise<T> {
  once(
    type: "transactionHash",
    handler: (receipt: string) => void
  ): PromiEvent<T>;
  once(
    type: "receipt",
    handler: (receipt: TransactionReceipt) => void
  ): PromiEvent<T>;
  once(
    type: "confirmation",
    handler: (confNumber: number, receipt: TransactionReceipt) => void
  ): PromiEvent<T>;
  once(type: "error", handler: (error: Error) => void): PromiEvent<T>;
  once(
    type: PromiEventType,
    handler: (error: Error | TransactionReceipt | string) => void
  ): PromiEvent<T>;
  on(
    type: "transactionHash",
    handler: (receipt: string) => void
  ): PromiEvent<T>;
  on(
    type: "receipt",
    handler: (receipt: TransactionReceipt) => void
  ): PromiEvent<T>;
  on(
    type: "confirmation",
    handler: (confNumber: number, receipt: TransactionReceipt) => void
  ): PromiEvent<T>;
  on(type: "error", handler: (error: Error) => void): PromiEvent<T>;
  on(
    type: "error" | "confirmation" | "receipt" | "transactionHash",
    handler: (error: Error | TransactionReceipt | string) => void
  ): PromiEvent<T>;
}

export interface TransactionReceipt {
  transactionHash: string;
  transactionIndex: number;
  blockHash: string;
  blockNumber: number;
  from: string;
  to: string;
  contractAddress: string;
  cumulativeGasUsed: number;
  gasUsed: number;
  logs?: Log[];
  events?: {
    [eventName: string]: EventLog;
  };
  status: boolean;
}

export interface EventLog {
  event: string;
  address: string;
  returnValues: any;
  logIndex: number;
  transactionIndex: number;
  transactionHash: string;
  blockHash: string;
  blockNumber: number;
  raw?: { data: string; topics: string[] };
}

export interface Log {
  address: string;
  data: string;
  topics: string[];
  logIndex: number;
  transactionHash: string;
  transactionIndex: number;
  blockHash: string;
  blockNumber: number;
}