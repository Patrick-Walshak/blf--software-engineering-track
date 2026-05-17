const cityInput = document.getElementById("cityInput")
const searchBtn = document.getElementById("searchBtn")
const temperature = document.getElementById("temperature")
const weatherCondition = document.getElementById("weatherCondition")
const cityName = document.getElementById("cityName")

let apiKey = getApiKey()

searchBtn.addEventListener("click", () => {

    let city = cityInput.value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)

    .then((response) => {
        return response.json()
    })

    .then((data) => {

        console.log(data)

        cityName.innerText = data.name

        temperature.innerText = `${Math.round(data.main.temp)}°C`

        weatherCondition.innerText = data.weather[0].main

    })

    .catch((error) => {
        console.log(error)
    })

})

