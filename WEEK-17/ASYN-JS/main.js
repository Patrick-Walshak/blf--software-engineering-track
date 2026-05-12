let saveButton = document.querySelector("#saveButton")

saveButton.addEventListener("click", (e) =>{
    e.preventDefault()

    let storeContent = JSON.parse(localStorage.getItem("content")) || []
    let userinput = document.querySelector("#userinput")
    let childEl = document.createElement("p")
    let storageContainer = document.querySelector(".storage")

    childEl.innerText = userinput.value
    console.log(childEl)

    console.log(storageContainer.length)
    childEl
    // storageContainer.appendChild(childEl)
    // console.log(userinput.value) 


    userinput.value=""
})