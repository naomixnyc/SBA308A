# Weather App Project

## Overview

This weather app fetches and displays real-time weather data from the OpenWeather API. It allows users to enter the name of a city, and the app retrieves weather information such as temperature, description, and daytime status (whether it's day or night). The data is then displayed on the page in a user-friendly format.

## Features

- Enter a city name to get real-time weather data.
- Displays weather information including temperature, weather description, and icon.
- Shows whether it’s daytime or nighttime based on the provided location’s time zone.
- Clean and responsive user interface.

## Tech Stack

- **JavaScript**: Handles fetching data and updating the DOM.
- **OpenWeather API**: Provides the weather data.


## How to Use

1. Enter the name of a city in the input field.
2. Click the "Get Weather" button.
3. The weather data for that city will be displayed, including temperature, weather description, and whether it's currently daytime or nighttime.
4. If the city name is invalid or data cannot be fetched, an error message will appear. <-- stopped working -->


## Example

1. Enter a city (e.g., "London").
2. Click "Get Weather."
3. The app will display the weather in that city along with an icon, description, temperature, and whether it is day or night.

## Challenges Faced

- **Daytime vs. Nighttime**: Determining whether it's day or night for the city’s location was based on comparing timestamps of the current time, sunrise, and sunset. 


## Future Development

- **City list**: Allow users to save and view weather data for multiple cities in one session.
- **Hourly forecast**: Extend the functionality to display weather data for the next 12 hours, including hourly temperature and weather description.
- **Mobile app version**: Convert this weather app into a mobile application using frameworks like React Native or Flutter to make it more accessible on different devices.
- **Enhanced error handling**: Improve error handling to cover more edge cases, such as when the OpenWeather API is down, and display relevant user-friendly messages.
- **User customization**: Allow users to select preferred units for temperature (Celsius/Fahrenheit) and toggle between a 12-hour and 24-hour time format.

## OpenWeather Icons

For weather icons, this app uses OpenWeather’s icon set to represent various weather conditions visually. You can find more details on the available icons and their meanings [here](https://openweathermap.org/weather-conditions).


