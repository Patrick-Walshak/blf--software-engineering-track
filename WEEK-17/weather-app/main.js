const cityInput = document.getElementById("cityInput")
const searchBtn = document.getElementById("searchBtn")
const temperature = document.getElementById("temperature")
const weatherCondition = document.getElementById("weatherCondition")
const cityName = document.getElementById("cityName")

searchBtn.addEventListener("click", () =>{
    let city = cityInput.value 
    console.log(city)

    fetch(fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0ae80774f1c51d4413571dc55be650c2`))
    .then((data) => {
    console.log(data)
})
})

