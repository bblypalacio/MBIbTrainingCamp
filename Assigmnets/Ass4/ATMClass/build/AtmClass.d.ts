import { AtmInterface } from './AtmInterface';
export declare class Atm implements AtmInterface {
    initialBalance: number;
    currentBalance: number;
    accountNumber: string;
    constructor();
    isAliveConnection(): void;
    setInitialBalance(acct: string, balance: number): void;
    withdrawMoney(acct: string, amount: number): void;
    depositMoney(acct: string, amount: number): void;
    showBalance(acct: string): void;
    accountExists(acct: string): void;
    getLastOperations(acct: string): void;
    closeOperation(): void;
}
