import { getWeather } from './api.js'

const card = document.querySelector('.card')
const errDisplay = document.getElementById('errDisplay')
const display = document.getElementById('weatherDisplay')
const time = document.querySelector('img.time')

export function displayWeather(location) {
    getWeather(location)
        .then(response => {
            const { name, sys, weather, main, dt } = response
            const { country, sunrise, sunset } = sys
            const { description, icon } = weather[0]
            const { temp, feels_like } = main

            const isDaytime = (dt, sunrise, sunset) => dt >= sunrise && dt < sunset
            const dayTimeStatus = isDaytime(dt, sunrise, sunset)

            // Update the background based on day/night
            card.classList.toggle('day', dayTimeStatus)
            card.classList.toggle('night', !dayTimeStatus)

            // Create the HTML content to display
            const weatherHTML = `
                <div class="icon bg-light mx-auto text-center">
                    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon">
                </div>
                <h5 class="my-3">${name}, ${country}</h5>
                <div class="my-3">${description}</div>
                <div class="display-5 my-3">
                    <span>${temp}</span>
                    <span>&degC</span>
                </div>
                <div class="my-3">It might feel like ${feels_like}</div>
                <p>Is it day? ${dayTimeStatus}</p>
            `
            display.innerHTML = weatherHTML

            // Show the card if it's hidden
            if (card.classList.contains('d-none')) {
                card.classList.remove('d-none')
            }
        })
        .catch(error => {
            errDisplay.textContent = "Failed to load weather data."
            console.error(error)
        })
}