class Bank {
    name = ""
    address = ""
    type = ""
    users = []

    constructor(name, address, type) {

    }
}

const fbn = new Bank("First Bank", "Terminus", "Commercial") 
const gtb = new Bank() 
console.log(fbn.name, gtb.users)