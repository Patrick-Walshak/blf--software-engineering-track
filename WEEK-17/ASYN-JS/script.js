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