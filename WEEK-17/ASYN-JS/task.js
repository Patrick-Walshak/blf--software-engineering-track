// Build a product ordering system that users can place and the order get process 

// the status of the order will be
// 1. PENDING 
// 2. PROCESSING 
// 3. PROCESS
// 4. OUT FOR DELIVIVERY
// 5. DELIVERED

// and the user can only place one product 
let users = [
    {
        id: 1,
        userName: "Alice",
        balance: 5000
    }
]

let products = [
   {
      name: "Laptop",
      price: 3000
   }
]



// CHECK USER FUNCTION
function checkUser(userName){

    let foundUser = users.find(
        user => user.userName === userName
    )

    return foundUser
}





function placeOrder(userName, product, price){

    return new Promise((resolve, reject) => {

    // CALLING checkUser FUNCTION
    let foundUser = checkUser(userName)

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

      console.log("PROCESSING")

      setTimeout(() => {

        console.log("PROCESS")

        setTimeout(() => {

          console.log("OUT FOR DELIVERY")

          setTimeout(() => {

            console.log("DELIVERED")

            // withdraw money after delivery
            foundUser.balance -= price

            resolve({
              message: `${product} delivered successfully`,
              balance: foundUser.balance
            })

          }, 2000)
        }, 5000)
      }, 4000)
    }, 6000)
  })
}



placeOrder("Alice", "Laptop", 3000)

.then(result => {
  console.log(result)
})

.catch(error => {
  console.log(error)
})