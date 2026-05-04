const greet = document.querySelector("#greeting")
const p = document.querySelector("#para")

// console.log(p)
greet.addEventListener('input', function(e){
    console.log(e.target.value)

    p.innerHTML = e.target.value
})