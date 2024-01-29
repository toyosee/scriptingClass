// script.js
// A simple weather application to seacrch for weather conditions
// Based on Open Weather API
// Search by city
// Author: Elijah Abolaji


const apiKey = '034c7cb2e7822c43d2ab81acb3be8891'; // Replace with your actual API key
const form = document.getElementById('location-form');
const locationInput = document.getElementById('location');
const weatherInfo = document.getElementById('weather-info');
const dimensions = {
    "style":"height:100px; width:100px; text-align:center;",
    "styling": "color:red;"
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const location = locationInput.value;
    getWeatherData(location);
});

function getWeatherData(location) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    let errorMessage = "Error fetching Data. Please enter a valid location and try again"

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Handle the weather data and update the UI
            updateUI(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = `${errorMessage}`
            // weatherInfo.style = dimensions.styling
        });
        
}

function updateUI(data) {
    // Extract relevant information from the data and update the UI
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const location = data.name;
    const lattitude = data.coord.lat
    const country = data.sys.country
    const weatherIcon = data.weather[0].icon;

    // Map OpenWeatherMap icons to a local icon set or use an external icon library
    const iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}.png`;


    weatherInfo.innerHTML = `
        <h2>Location: ${location}</h2> 
        <h4>Country: ${country}</h4>
        <h4>Lattitude: ${lattitude}</h4>
        <h4>Temperature: ${temperature} &deg;C</h4>
        <img src="${iconUrl}" alt="Weather Icon" class="mx-auto d-block" style="${dimensions.style}">
        <strong>Description: ${description}</strong>
        
    `;

    // console.log(data)
    locationInput.value = ''
}
