let run = 10

let inter = setInterval(() => {
    console.log("Hello")
    run -= 1

    if (run < 1){
        clearInterval(inter)
    }

    console.log(run)
}, 2000)
