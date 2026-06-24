//Define module'    
// how to make are server rister for a change 
// npm i nodemon is use to listen for file changes 
//querry
//param
//reques.body
// const express = require("express")


// const app = express();

// app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Hello from express!")
// })

// const userEmail = "alice@gmail.com"
// const userPass = "alice123"

// app.post("/login", (req, res) => {
//     // res.send("Login Successfullly!")
//     const {email, password} = req.body

//     if(email != userEmail){
//         res.status(401).json({message: "Invalid email!"})
//     }

//     if(password != userPass) {
//         res.status(401).json({message: "Invalid password!"})
//     }

//     return res.json({message: "Login Successfull"})

//     res.send({message: "access successfull"})
// })

// app.listen(4000, () => {
//     console.log("server is runing on port 4000")
// })


// when someone make a request  u will check is the the email exist and password exist define three user  and make a login endpoint 
//Create an Express.js server with a login endpoint that checks user credentials.

const express = require("express");

const app = express() //created and instance of express


app.use(express.json());


const users = [
    {
        name: "wallex",
        email: "wallex@gmail.com",
        password: "wallex1234"
    },

    {
        name: "alice",
        email: "alice@gmail.com",
        password: "alice1234"
    },

    {
        name: "bob",
        email: "bob@gmail.com",
        password: "bob1234"
    }
]

app.post("/login", (req, res) => {
    const {email, password} = req.body

    const user = users.find(user => user.email === email && user.password === password);

    if(!user){
        return res.status(401).json({success: false, message: "Invalid credentials"});
    }

    if(user.password !== req.body.password){
        return res.status(401).json({success: false, message: "Invalid password"})
    }
    

    return res.json({message: "Login Successful "})
})


app.listen(4000, () => {
    console.log("server is runing on port 4000")
})


// are middlesware that dit between ur function amd ur post