//Create 2 classes
//Account class
// - Account number, owner, list of transactions (shoud be empty for a new account)
// - getBalance() --> loop through all transactions and return the current balance
// - addTransaction() --> Checks to see if the amount is valid (ie cannot deduct more than the balance)
// OR
// - 2 different methods (deposit(amt) and charge(payee, amt))

//Transacion class
// - Amount (+/-), payee, date

//Create savings class that extends Account
// - interestRate
// - accrueInterest() --> get the balance and add a new transaction to the list of transactions for the interest accrued on the account

class Account {
    constructor (name, number) {
        this.name = name;
        this.number = number;
        this.transactions = [];
    }
    getBalance() {
        if (this.transactions.length == 0) {
            return 0;
        } else {
            let balance = this.transactions.map(function(element) {
                return element.amount;
            }).reduce(function(prev, curr) {
                return prev + curr;
            });
            return balance;
        }
    }
    //If adding the transaction 
    addTransaction(payee, amount) {
        let newTrans = new Transaction(payee, amount);
        if (Math.sign(amount) == -1 && Math.abs(amount) < this.getBalance()) {
            this.transactions.push(newTrans);
        } else if (Math.sign(amount) == 1) {
            this.transactions.push(newTrans);
        }
    }
}

class Transaction {
    constructor (payee, amount) {
        this.payee = payee;
        this.amount = amount;
        this.date = new Date();
    }
}

class Savings extends Account {
    constructor (name, number, interestRate) {
        super(name, number);
        this.interestRate = interestRate;
    }
    accrueInterest() {
        let interestAmount = this.getBalance() * this.interestRate;
        let newInterest = new Transaction("Interest Payment", interestAmount);
        this.transactions.push(newInterest);
    }
}

let accountA = new Account("John Doe", "123-456-789");
accountA.addTransaction("Deposit", 1000);
accountA.addTransaction("Target", -45);
accountA.addTransaction("FreeBirds", -7.35);
console.log('The current balance for this account is', accountA.getBalance());     //This should print 942.65
accountA.addTransaction("Fraud!!", -1000);  //This should not go through
console.log('The current balance for this account is', accountA.getBalance());     //This should print 942.65

//Savings account accruing interest
let savingsA = new Savings("Connor Sunbeck", "098-765-432", .03);
savingsA.addTransaction("Deposit", 1000);
savingsA.accrueInterest();
console.log(savingsA.getBalance());