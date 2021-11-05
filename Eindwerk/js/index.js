"use strict";

window.onload = function(){
    let submitForm = document.getElementById('searchform').addEventListener("submit", e => {
        e.preventDefault();
        let inputPlaces = document.getElementById("inputPlace").value;
        console.log('Plaats', inputPlaces);
        getvals(inputPlaces)
    });
}

function getvals(inputPlaces){
    return fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=y9jdsRhSBmSiVS7TFBcWCAsH6r9Xg90c&location=${inputPlaces}`,
    {
    	method: "GET",
    })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      let data = responseData.results[0].locations[0].displayLatLng;
      console.log('b', data);
      return data;
    })
    .catch(error => console.warn(error));
}
async function data(){
    await getvals().then(response => console.log('Test', response));
}
  

function getWeather(positions){
    let lat = positions.lat;
    console.log('c', lat);
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=8532eda8a091632f5428caff44d04e73&units=metric`)
    .then(response => response.json())
    .then(data => {
        console.log('Succes', data);
        let weatherInfo = data.hourly;
        console.log('Info', weatherInfo);
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
            //let newData = new Date(weatherInfo.dt*1000-(weatherInfo.timezone*1000));
    });
}

































































    // fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&APPID=8532eda8a091632f5428caff44d04e73&units=metric`)
    // .then(response => {return response.json()})
    // .then(data => {
    //     console.log("Succes", data);
    //     console.log("Minus",new Date(data.dt*1000-(data.timezone*1000))); // minus 
    //     console.log("Plus", new Date(data.dt*1000+(data.timezone*1000))); // plus
    //     let weatherInfo = data;
    //         //let newData = new Date(weatherInfo.dt*1000-(weatherInfo.timezone*1000));
    //         console.log('Condition', weatherInfo.weather[0].main);
    //         console.log('Temp', weatherInfo.main.temp);
    //         let containerWeather = document.getElementById('weatherRightMenuBlock');
    //         let htmlWeather = `
    //             <div id="conditionWeather">
    //                 <p id="iconWeather">${weatherInfo.weather[0].icon}</p>
    //                 <p id="weatherConditionName">${weatherInfo.weather[0].main}</p>
    //             </div>
    //             <p id="clock"></p>
    //             <p id="temperature">${weatherInfo.main.temp}°C</p>`;
    //         containerWeather.insertAdjacentHTML('beforeend', htmlWeather);
    // });


// function geoTracker(inputPlaces){
//     // data moon and sun: geotracker
//     // https://ipgeolocation.io/documentation/astronomy-api.html
//     fetch(`https://api.ipgeolocation.io/astronomy?apiKey=beb03411ca57456b8140cb4d08c8086d&location=${inputPlaces}`, {
//         method: "GET"
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log("Succes Location API", data);

//         let container4 = document.getElementById('api2');
//         let stringHTML4 = `
//                 <div class="col-md-8">
//                     <h2>GEOlocation</h2>
//                     <div class="card-body">
//                         <h5 class="title">${data.date}</h5>
//                         <p class="director">${data.moonrise}</p>
//                     </div>
//                     <div class="card-body1">
//                         <h5 class="title1">${data.sunset}</h5>
//                         <p class="director1">${data.sunrise}</p>
//                     </div>
//                 </div>`;
//         container4.insertAdjacentHTML('beforeend', stringHTML4);
//     })
// }
    

//     // solar bodies api => solar objects with name en when discovered
//     //https://api.le-systeme-solaire.net/en/
//     fetch(`https://api.le-systeme-solaire.net/rest/bodies/`)
//     .then(response => response.json())
//     .then(data => {
//         console.log('Succes Horoscope api', data);
//         let star = data.bodies[129];
//             let container5 = document.getElementById('api3');
//             let stringHTML5 = `
//                 <div class="col-md-8">
//                 <h2>Special Stars with name</h2>
//                     <div class="card-body">
//                         <h5 class="title">${star.englishName}</h5>
//                         <p class="director">${star.discoveredBy}</p>
//                         <p class="director">${star.discoveryDate}</p>
//                     </div>
//                 </div>`;
//             container5.insertAdjacentHTML('beforeend', stringHTML5);
        
//     });