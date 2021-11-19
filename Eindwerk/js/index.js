"use strict";

window.onload = function(){
    let submitForm = document.getElementById('searchform').addEventListener("submit", e => {
        e.preventDefault();
        let inputPlaces = document.getElementById("inputPlace").value;
        console.log('Plaats', inputPlaces);
        getData(inputPlaces);
    });
}

//ophalen van data voor lat en long van inputPlaces
function getData(inputPlaces){
    fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=y9jdsRhSBmSiVS7TFBcWCAsH6r9Xg90c&location=${inputPlaces}`)
    .then(response => response.json())
    .then(data => {
        console.log('succes data fetch getData', data);
        getWeather(data)                                            // doorgeven van data naar getWeather functie
    })
}


function getWeather(data){              
    console.log('succes data getWeather', data);                    // zien of data wordt overgezet en wordt ingeladen
    let lat = data.results[0].locations[0].displayLatLng.lat;       //ophalen data voor de latitude
    let lon = data.results[0].locations[0].displayLatLng.lng;       // ophalen data voor de longitude
    console.log('Lat getWeather', lat);
    console.log('Lon getWeather', lon);
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=8532eda8a091632f5428caff44d04e73&units=metric`)
    .then(response => response.json())
    .then(data => {
        let weatherInfo = data.hourly;                              // ophalen data voor info weer per uur komende 48h
        weatherInfo.forEach(weatherData => {
            let newData = new Date(weatherData.dt*1000);
            let containerWeather = document.getElementById('weatherRightMenu');
            let htmlWeather = `
                <div id="weatherRightMenuBlock">
                    <img class="iconWeather" src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png" alt="icon-weather-condition">
                    <div id="columnText">
                        <p id="clock">${newData}</p>
                        <div id="conditionWeather">
                        <p id="temperature">${weatherData.temp}°C</p>
                        <p id="weatherConditionName">${weatherData.weather[0].description}</p>
                        </div>
                    </div>
                </div>`;
            containerWeather.insertAdjacentHTML('beforeend', htmlWeather);
        })
    });        
}
