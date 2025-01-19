"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = __importDefault(require("../Account"));
describe("Account", () => {
    let account;
    beforeEach(() => {
        account = new Account_1.default(); // Initialize a new account before each test
    });
    test("should deposit money into the account", () => {
        const result = account.deposit(100);
        expect(result).toBe("Deposited $100. Current balance: $100");
        expect(account.getBalance()).toBe("Current balance: $100");
    });
    test("should throw an error for invalid deposit amount", () => {
        expect(() => account.deposit(-50)).toThrow("Deposit amount must be greater than zero.");
    });
    test("should withdraw money from the account", () => {
        account.deposit(200); // Add money first
        const result = account.withdraw(50);
        expect(result).toBe("Withdrew $50. Current balance: $150");
        expect(account.getBalance()).toBe("Current balance: $150");
    });
    test("should throw an error for insufficient funds", () => {
        expect(() => account.withdraw(50)).toThrow("Insufficient funds.");
    });
    test("should throw an error for invalid withdrawal amount", () => {
        expect(() => account.withdraw(-30)).toThrow("Withdrawal amount must be greater than zero.");
    });
    test("should check the current balance", () => {
        account.deposit(300);
        expect(account.getBalance()).toBe("Current balance: $300");
    });
});
