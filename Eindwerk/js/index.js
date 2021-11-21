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
    .then(data2 => {
        //console.log('succes data fetch getData', data);
        getWeather(data2)                                            // doorgeven van data naar getWeather functie
                                                                    // Beter niet boven in window.onload function -> anders wordt het 2x uitgevoerd
    })
}

function getWeather(data2){              
    //console.log('succes data getWeather', data);                    // zien of data wordt overgezet en wordt ingeladen
    let lat = data2.results[0].locations[0].displayLatLng.lat;       //ophalen data voor de latitude
    let lon = data2.results[0].locations[0].displayLatLng.lng;       // ophalen data voor de longitude
    
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=8532eda8a091632f5428caff44d04e73&units=metric`)
    .then(response => response.json())
    .then(data => {
        console.log('Weather data', data);
        let weatherHourly = data.hourly;
        weatherHourly.forEach(weather => {

            /* begin https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript/847196#847196*/
            let unix_timestamp = weather.dt;
            let date = new Date(unix_timestamp * 1000);
            let hours = date.getHours();
            let minutes = "0" + date.getMinutes();
            let formattedTime = hours + ':' + minutes.substr(-2);
            /* Eind https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript/847196#847196*/
            
            let containerWeather = document.getElementById('weatherRightMenu');
            let htmlWeather = `
                <div id="weatherRightMenuBlock">
                    <img class="iconWeather" src="http://openweathermap.org/img/wn/${weather.weather[0].icon}.png" alt="icon-weather-condition">
                    <div id="columnText">
                        <p id="clock">${formattedTime}</p>
                        <div id="conditionWeather">
                            <p id="temperature">${weather.temp}°C</pv>
                            &nbsp; 
                            <p id="weatherConditionName">${weather.weather[0].description}</p>
                        </div>
                    </div>
                </div>`;
            containerWeather.insertAdjacentHTML('beforeend', htmlWeather);
        })
    });        
}