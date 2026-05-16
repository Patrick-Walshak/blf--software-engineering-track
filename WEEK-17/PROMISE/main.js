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

let checkAge = 18;

let age = new Promise((resolve, reject) => {
    if(checkAge > 18){
        resolve("Access Granted")
    }else{
        reject("Access Denied")
    }
})

age
.then((data) =>{
    console.log(data)
})

.catch((data) => {
    console.log(data)
})