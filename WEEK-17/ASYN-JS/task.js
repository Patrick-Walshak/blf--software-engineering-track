// Build a product ordering system that users can place and order and the order get process 

// the status of the order will be
// 1. PENDING 
// 2. PROCESSING 
// 3. PROCESS
// 4. OUT FOR DELIVIVERY
// 5. DELIVERED

// and the user can only place one product 
//using promise in javscript 
//how to approach'
let users = [
    {
        id: 1,
        userName: "Alice",
        balance: 5000

    }
]

let product = [
    {
        
    }
]

function placeOrder(userName, product, price){
    return new Promise((resolve, reject) => {
    let foundUser = users.find(
      user => user.userName === userName
    )

    if (!foundUser) {
      
        reject("User not found")
      return
    }

    if (foundUser.balance < price) {
      reject("Insufficient balance")
      return
    }

    console.log("PENDING")
          setTimeout(() => {

            console.log("DELIVERED")

            // withdraw money after delivery
            foundUser.balance -= price

            resolve({
              message: `${product} delivered successfully`,
              balance: foundUser.balance
            })

          }, 2000)



    })
    
}

placeOrder("Alice", "Laptop", 3000)

.then(result => {
  console.log(result)
})