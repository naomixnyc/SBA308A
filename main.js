import useApiKey from './key.js'
import { getWeather } from './weather.js' 
import { fetchWeatherData } from './api.js'


import { displayWeather } from './weather.js'

document.getElementById('weatherButton').addEventListener('click', () => {
    const location = document.getElementById('locationInput').value.trim()
    if (location) {
        displayWeather(location)
    } else {
        document.getElementById('errDisplay').textContent = "Please enter a location!"
    }
})
