//import { apiKey } from './key.js'
//const apiKey = "e99d00e51b06d08faf6b8cbd2fa15b4e"
import useApiKey from './key.js'
//import { apiKey } from './key.js'
//const apiKey = "e99d00e51b06d08faf6b8cbd2fa15b4e"


export async function getWeather(location) {
    const apiKey = useApiKey()
    const apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
    
    try {
        const response = await fetch(apiURL)
        const data = await response.json()

        if (data.cod !== 200) {
            throw new Error("Can't fetch data!")
        }

        return data
    } catch (err) {
        throw new Error("Failed to fetch weather data")
    }
}
