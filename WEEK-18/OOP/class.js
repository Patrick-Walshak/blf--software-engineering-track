class Bank {
    name = ""
    address = ""
    type = ""
    users = []

    constructor(name, address, type) {
        this.name = name
        this.address = address
        this.type = type
    }

    createAccount(name, age, address, balance, account){ //one methos
        this.users.push({
            name:name,
            age:age,
            address:address,
            account:account,
            balance:balance
        })
        console.log(this.users)
    }

    deposite(account, amount){
        let user = this.users.find(user => user.account == account)

        if(!this.users) return "user not fount"

       user.balance += amount
        console.log(this.users)
    }

    withdraw(account, amount){
        let user = this.users.find(user => user.account == account)

        if(!this.users) return "user not fount"

        if(user.balance < amount) return "Insifficient balance"

        user.balance -= amount
        console.log(this.users)
    }
}


// const fbn = new Bank("First Bank", "Terminus", "Commercial") 
// const gtb = new Bank("Gimini Trust Bank", "British", "Commercial") 
const opay = new Bank("Opay bank", "Jos", "Commercial")

opay.createAccount("Solex", 30, "Rayfield", 30000, "1111123455")
opay.deposite("1111123455", 20000)

console.log("Withdraw")

opay.deposite("1111123455", 10000)


console.log(opay)
// a dist keyowrd that basically references the proper or method of that particular back