let users = [
  {
    id: 1,
    userName: "Alice",
    balance: 5000
  }
]



function placeOrder(userName, product, price) {

  return new Promise((resolve, reject) => {

    // Check user
    let foundUser = users.find(
      user => user.userName === userName
    )

    // If user does not exist
    if (!foundUser) {
      reject("User not found")
      return
    }

    // Check balance
    if (foundUser.balance < price) {
      reject("Insufficient balance")
      return
    }

    console.log("1. PENDING")



    setTimeout(() => {

      console.log("2. PROCESSING")



      setTimeout(() => {

        console.log("3. PROCESS")



        setTimeout(() => {

          console.log("4. OUT FOR DELIVERY")



          setTimeout(() => {

            console.log("5. DELIVERED")

            // Remove money after delivery
            foundUser.balance -= price

            resolve({
              message: `${product} delivered successfully`,
              balance: foundUser.balance
            })

          }, 2000)

        }, 2000)

      }, 2000)

    }, 2000)

  })

}



placeOrder("Alice", "Laptop", 3000)

.then(result => {
  console.log(result)
})

.catch(error => {
  console.log(error)
})