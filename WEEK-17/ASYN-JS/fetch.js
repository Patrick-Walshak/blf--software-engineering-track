api = fetch("https://jsonplaceholder.typicode.com/users"), {

    method: "GET"

}; 

api

.then(res => res.json())
.then((data) => {
    console.log(data [0].name)
})