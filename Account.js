"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    constructor() {
        this.balance = 0; // Initial balance is zero
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return `Deposited $${amount}. Current balance: $${this.balance}`;
        }
        else {
            throw new Error("Deposit amount must be greater than zero.");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return `Withdrew $${amount}. Current balance: $${this.balance}`;
        }
        else if (amount > this.balance) {
            throw new Error("Insufficient funds.");
        }
        else {
            throw new Error("Withdrawal amount must be greater than zero.");
        }
    }
    getBalance() {
        return `Current balance: $${this.balance}`;
    }
}
exports.default = Account;
