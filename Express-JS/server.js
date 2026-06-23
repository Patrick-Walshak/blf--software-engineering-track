//Define module'
// how to make are server rister for a change 
// npm i nodemon is use to listen for file changes 
//querry
//param
//reques.body
const express = require("express")
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from express!")
})

const userEmail = "alice@gmail.com"
const userPass = "alice123"

app.post("/login", (req, res) => {
    // res.send("Login Successfullly!")
    const {email, password} = req.body

    if(email != userEmail){
        res.status(401).json({message: "Invalid email!"})
    }

    if(password != userPass) {
        res.status(401).json({message: "Invalid email!"})
    }

    return res.json({message: "Login Successfull"})

    res.send({message: "access successfull"})
})

app.listen(4000, () => {
    console.log("server is runing on port 4000")
})

// const users = [
//     {
//         email: "",
//         password: ""
//     }
// ]

// when someone make a request s u will check is the the email exist and password exist define three user  and make a login endpoint 