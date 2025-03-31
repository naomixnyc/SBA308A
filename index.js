import useApiKey from './key.js'
//import { apiKey } from './key.js'
//const apiKey = "e99d00e51b06d08faf6b8cbd2fa15b4e"
const card = document.querySelector('.card')
const errDisplay = document.getElementById('errDisplay')
const display = document.getElementById('weatherDisplay')
const time = document.querySelector('img.time')
//const iconDiv = document.querySelector('.icon')

//const apiURL = 'http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=e99d00e51b06d08faf6b8cbd2fa15b4e'
//const apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`

//document.getElementById('weatherButton').addEventListener('click', () => console.log(document.getElementById('locationInput').value))

// document.getElementById('weatherButton').addEventListener('click', (e) => {// necessary?
//     e.preventDefault() 
//     getWeather()
// })

document.getElementById('weatherButton').addEventListener('click', getWeather)

async function getWeather() {
    const location = document.getElementById('locationInput').value.trim()
    //const apiKey = apiKey
    const apiKey = useApiKey()
    const apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
    // console.log(apiKey)
    // console.log(apiURL)

    try {
        const response = await (await fetch(apiURL)).json()
        //const data = await response.json()
        //console.log(response)

        if (response.cod !== 200) {
            errDisplay.textContent = "can't fetch data!" // before throw
            throw new Error("can't fetch data!!") //400 - bad enry
        }

        console.log(response)
        //console.log(response.weather[0])
        //console.log(response.main)
        const { name, dt } = response
        const { country, sunrise, sunset } = response.sys
        const { description, icon } = response.weather[0] //object literal shorthand - cool!
        const { temp, feels_like } = response.main


        //console.log ("current time: ", dt, "sunrise: ", sunrise, "sunset: ", sunset) //1743366570 1743411671 1743398505

        const isDaytime = (dt, sunrise, sunset) => {
            return dt >= sunrise && dt < sunset
        }
        const dayTimeStatus = isDaytime(dt, sunrise, sunset)
        console.log("Is it daytime?", dayTimeStatus)

        // let timeImgSrc = null
        // if(dayTimeStatus){
        //     timeImgSrc = 'img/day.svg'
        // } else {
        //     timeImgSrc = 'img/night.svg'
        // }
        // time.setAttribute('src', timeImgSrc)


        // Update the card background based on day or night
        // time.classList.remove('day', 'night')
        // card.classList.remove('day', 'night') // remove both classes


        if (dayTimeStatus) {
            card.classList.add('day') 
            card.classList.remove('night') 
        } else {
            card.classList.add('night') 
            card.classList.remove('day')
        }




        // const weather = `
        //     <p>${name}, ${country}</p>
        //     <P>It's day? ${isDaytime()}</p>
        //     <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon">
        //     <p>${description}</p>
        //     <p>${temp}C</p>
        //     <p>It feels like ${feels_like}C</p>
        // `

        //const iconSrc = `https://openweathermap.org/img/wn/${icon}@2x.png`
        // icon.setAttribute('src', iconSrc) // not an img tag.. img tag doesn't even exit
        // let iconImg = document.createElement('img')
        // iconDiv.appendChild(iconImg)
        // iconImg.setAttribute('src', iconSrc)




        // <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon">
        const weather = `
                <div class="icon bg-light mx-auto text-ceter">
                    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon">
                </div>
                <h5 class="my-3">${name}, ${country}</h5>
                <div class="my-3">${description}</div>
                <div class="display-5 my-3">
                    <span>${temp}</span>
                    <span>&deg;C</span>
                </div>
                <div class="my-3">It might feel like ${feels_like}</div>
                <P>It's day? ${dayTimeStatus}</p>
        `
        display.innerHTML = weather

        // console.log("Updating display with:", weather)
        // console.log("display:", display)

        // remove the d-none class if present
        if (card.classList.contains('d-none')) {
            card.classList.remove('d-none')
        }



    } catch (err) {
        console.log(err)
    }
}




















//----Async - returning Promise obj test -----------
// const getPromiseAsycFuncReturns = async() => {}
// // const test = getPromiseAsycFuncReturns()
// // console.log(test)
// console.log(getPromiseAsycFuncReturns())
// - - - -

// const getPromiseAsycFuncReturns = async() => { //this just returns Response fetch obj returns
//     const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=e99d00e51b06d08faf6b8cbd2fa15b4e')
//     //console.log(response)
//     if((response.status !== 200)){ // in the case of incorrect URL, even though resource doesn't exit, Promise doesn't reject 
//         throw new Error("can't fetch data") // own error
//     }
//     const data = await response.json()
//     //console.log(data)
//     return data
// }
// //getPromiseAsycFuncReturns() // return data returns Promise so...
// getPromiseAsycFuncReturns()
//     .then(data => console.log(data))
//     .catch(err => console.log(err.message)) //"can't fetch data"

// Response {
//     status: 200,
//     statusText: 'OK',
//     headers: Headers {
//       server: 'openresty',
//       date: 'Sun, 30 Mar 2025 17:34:00 GMT',
//       'content-type': 'application/json; charset=utf-8',
//       'content-length': '499',
//       connection: 'keep-alive',
//       'x-cache-key': '/data/2.5/weather?q=london&units=metric',
//       'access-control-allow-origin': '*',
//       'access-control-allow-credentials': 'true',
//       'access-control-allow-methods': 'GET, POST'
//     },
//     body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
//     bodyUsed: false,
//     ok: true,
//     redirected: false,
//     type: 'basic',
//     url: 'http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=e99d00e51b06d08faf6b8cbd2fa15b4e'
//   }

//uised json method:
// {
//     coord: { lon: -0.1257, lat: 51.5085 },
//     weather: [ { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' } ],
//     base: 'stations',
//     main: {
//       temp: 16.14,
//       feels_like: 14.88,
//       temp_min: 15.3,
//       temp_max: 16.77,
//       pressure: 1022,
//       humidity: 41,
//       sea_level: 1022,
//       grnd_level: 1018
//     },
//     visibility: 10000,
//     wind: { speed: 6.17, deg: 300 },
//     clouds: { all: 4 },
//     dt: 1743355590,
//     sys: {
//       type: 2,
//       id: 268730,
//       country: 'GB',
//       sunrise: 1743313204,
//       sunset: 1743359371
//     },
//     timezone: 3600,
//     id: 2643743,
//     name: 'London',
//     cod: 200
//   }
