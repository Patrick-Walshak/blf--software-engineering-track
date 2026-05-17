const cityInput = document.getElementById("cityInput")
const searchBtn = document.getElementById("searchBtn")
const temperature = document.getElementById("temperature")
const weatherCondition = document.getElementById("weatherCondition")
const cityName = document.getElementById("cityName")
let body = document.getElementById("body")

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


         let weather = data.weather[0].main

        if(weather === "Clouds"){

            body.style.backgroundImage = "url('https://i.pinimg.com/736x/7e/89/4c/7e894cbc2ab536a753e75eb4b0ec60dc.jpg')"

        }else if(weather === "Rain"){

            body.style.backgroundImage = "url('https://i.pinimg.com/736x/c0/8f/ff/c08fff9611efaa2199da46528ee71b68.jpg')"

        }else if(weather === "Clear"){

            body.style.backgroundImage = "url('https://i.pinimg.com/1200x/cb/9e/73/cb9e736d04a55e6c3ab99f4077e1afe9.jpg')"

        }

        body.style.backgroundSize = "cover"

        body.style.backgroundPosition = "center"


    })

    .catch((error) => {
        console.log(error)
    })

})

