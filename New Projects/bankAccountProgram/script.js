class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount <= 0) {
      return "Deposit amount must be greater than zero.";
    }
    this.balance += amount;
    this.transactions.push({
      type: "deposit",
      amount: amount
    });

    return `Successfully deposited $${amount}. New balance: $${this.balance}`;
  }

  withdraw(amount){
      if (amount <= 0 | amount >= this.balance) {
      return "Insufficient balance or invalid amount.";
    }
    this.balance -= amount;
    this.transactions.push({
      type: "withdraw",
      amount: amount
    });

    return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
  }

  checkBalance(){
    return `Current balance: $${this.balance}`
  }

  listAllDeposits() {
    const deposits = [];
    for (let i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === "deposit") {
        deposits.push(this.transactions[i].amount);
      }
    }
    return `Deposits: ${deposits}`;
  }

  listAllWithdrawals() {
    const withdrawals = [];
    for (let i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === "withdraw") {
        withdrawals.push(this.transactions[i].amount);
      }
    }
    return `Withdrawals: ${withdrawals}`;
  }

}

const myAccount = new BankAccount();
console.log(myAccount.deposit(100));
console.log(myAccount.deposit(100));
console.log(myAccount.deposit(100));
console.log(myAccount.deposit(100));
console.log(myAccount.deposit(100));
console.log(myAccount.withdraw(100));
console.log(myAccount.withdraw(100));
console.log(myAccount.checkBalance())
console.log(myAccount.listAllDeposits());