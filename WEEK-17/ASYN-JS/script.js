// let run = 10

// let inter = setInterval(() => {
//     console.log("Hello")
//     run -= 1

//     if (run < 1){
//         clearInterval(inter)
//     }

//     console.log(run)
// }, 2000)

//WEB-API ==> help us to communitcate with aplication that are not browser


//PROMISE
//pending, fulfill, reject
// let sentEmail = new Promise((resolve, reject) => {
//     let isSent = "failed"

//     if(isSent == "Sent"){
//         resolve({success:true, status: isSent, message:"Email sent successfully!"})
//     }
    
//     if(isSent == "Pending"){
//         resolve({success:true, status: isSent, message:"Email sent successfully!"})
//     }else{
//         reject("Email not send!")
//     }
// })
// sentEmail.then((data) => {
//     console.log(DataTransfer.message)
// }).catch((erro) =>())
// console.log(sentEmail)

//withdraw from the sender and add to the resiver 
// let users = [ 
//     {
//         id: 1,
//         balance:2000,
//         name:"MP"
//     },
//     {
//         id: 2,
//         balance:4000,
//         name:"JS"
//     },
//     {
//         id: 3,
//         balance:4000,
//         name:"Lex"
//     },
// ]

// function checkUser(id){
//     let user = users.find(user => user.id == id)
//     // new Promise((resolve, reject) => (
        
        
//     // ))

//     if (user){
//         return user
//     }

//     return null
// }


// function updateBlance(id, amount, op) {
//     users.forEach((user) => {
//         if(user.id == id) {
//             if(op == "withdraw"){
//                 user.balance -= amount
//             }else{
//                 user.balance += amount
//             }
//         }
//     });
// }

// (() => {
//     let users = checkUser(1)

//     updateBlance(1, 1000, "deposite")
    
//     console.log(users)
// })()



