//  QUESTION 1  

// let message = new Promise((resolve, reject) => {
    
//     setTimeout(() => {
        
//     }, 2000);

//     console.log("Payment Successful!")
// })

// message

// let fail = new Promise((resolve, reject) => {
    
//     setTimeout(() => {
//         resolve("Network Error!")
//     }, 2000);
// })

// fail
// .then((data) =>{
//     console.log(data)
// })

// let email = "admin@gmail.com"
// let password = "1111"

// let check = new Promise((resolve, reject) => {
//     if(email == email){
//         resolve("Welcome Admin")
//     }else{
//         reject("Wrong credentials")
//     }
// })

// check
// .then((data) =>{
//     console.log(data)
// })

// .catch((data) => {
//     console.log(data)
// })

function checkAge(age) {
   return new Promise((resolve, reject) => {
    if(age >= 18){
        resolve("Access Granted")
    }else{
        reject("Access Denied")
    }
})
}


checkAge(18)
.then((data) =>{
    console.log(data)
})

.catch((data) => {
    console.log(data)
})

function orderFood(foodName) {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(orderFood == "Burger"){
                resolve("Burder Delivered!")
            }else{
                reject("Food not available!")
            }
        }, 2000);
    })
}

orderFood("Burger")

.then((data) => {
    console.log(data)
})

.catch((data) => {
    console.log(data)
})