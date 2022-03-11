class UserAccount {
 private cpf: string;
 private name: string;
 private age: number;
 private balance: number = 0;
 private transactions: Transaction[] = [];

 constructor(
  cpf: string,
  name: string,
  age: number,
 ) {
  console.log("Chamando o construtor da classe UserAccount")
  this.cpf = cpf;
  this.name = name;
  this.age = age;
 }

 addTransactions(trans: Transaction) {
  this.transactions.push(trans)
 }
}

class Transaction {
 private date: string;
 private value: number;
 private description: string;

 constructor(date: string, value: number, description: string) {
  this.date = date;
  this.value = value;
  this.description = description
 }
}

class Bank {
 private accounts: UserAccount[];

 constructor(accounts: UserAccount[]) {
  this.accounts = accounts;
 }
 getAccounts() {
  return this.accounts
 }
}

const trans: Transaction = new Transaction('30/01/2020', 200, "teste")
const user: UserAccount = new UserAccount("renan", "123.456.789-10", 25)
user.addTransactions(trans)

let users: UserAccount[] = [user]

const bank = new Bank(users)
console.log(bank.getAccounts())