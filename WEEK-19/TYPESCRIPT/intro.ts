// let fullName: string = "Solex Protocol"
// let age: number = 20;
// let isMaried: boolean =  true
// let fruits: string[] = ["Mango", "Guava", "Pear"]
// console.log(fullName)

// let user: {
//     name: string;
//     age: number;
//     siStudent: boolean;
//     skills: string[]
// } = {
//     name: "solex",
//     age: 50,
//     siStudent: true,
//     skills:["HTML", "JS", "CSS", "TYPESCRIPT"]
// }

// console.log(user)

// user.skills.forEach((user) => {
//     if(!user){
//         console.log("user does not exist")
//     }else{
//         console.log(`${user} => That the user details`)
//     }

// });


// 1. create an array of objects for users with there properties: namespace, email, phone, & siblings

// Siblings should also be an Array of object

let users: {
    name: string;
    email: string;
    phone: number;
    siblings: {name: string; age: number;}[];
}[] =   [{
        name: "Wallex002",
        email: "wallex@gmail.com",
        phone: 70666419,
        siblings: [{name: "John", age: 18}, {name: "Sarah", age: 15}]
    },

    {
        name: "Wallex002",
        email: "wallex@gmail.com",
        phone: 70666419,
        siblings: [{name: "John", age: 18}, {name: "Sarah", age: 15}]
    }
]

console.log(users)

