// let apikey =  "hVyUnPy5FvnZ1krd7VM7g5EZ4kYEBrRtln969gRb"

// async function quotGenerator() {
//     let respose = await fetch("https://api.api-ninjas.com/v2/randomquotes", {
//         method: 'GET',
//         headers: {
//             "X-Api-Key": apikey
//         }
//     })
//     let data = await respose.json()
//     quoteGenerator(data)
// }


// let btn = document.getElementById("new-quote")

// btn.addEventListener("click", quotGenerator)

// function quoteGenerator(data){
//     let character = document.getElementById("character")

//     data.forEach((quote) => {
//         character.textContent = `${quote.quote}`
//     });
// }