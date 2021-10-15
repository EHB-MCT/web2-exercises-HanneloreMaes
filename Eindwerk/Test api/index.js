"use strict";

// special galaxy api => ophalen notificaties 
// https://api.nasa.gov/ => Coronal Mass Ejection (CME)

fetch(`https://api.nasa.gov/DONKI/notifications?startDate=2014-05-01&endDate=2014-05-08&type=all&api_key=3mLhSkJOLNh6zUKdf7aUjI9roVHmNMdANf2ziKoK`)
.then(response => response.json())
.then(data => {
    console.log('Succes Nasa', data);
    //console.log('URL', galaxy.messageBody);
    let galaxy = data[0];

    let container = document.getElementById('api1');
    let stringHTML = `
        <div class="col-md-8">
            <h2>Special galaxy stuff </h2>
            <div class="card-body">
                <h5 class="title">${galaxy.messageType}</h5>
                <p class="director">${galaxy.messageIssueTime}</p>
                <p class="plot">${galaxy.messageBody}</p>
            </div>
        </div>`;
    container.insertAdjacentHTML('beforeend', stringHTML);
});

// weather api -> ophalen plaats en weer 
// https://openweathermap.org/current

// fetch(`api.openweathermap.org/data/2.5/weather?q=London&appid={8532eda8a091632f5428caff44d04e73}`)
// .then(response => response.json())
// .then(data => {
//     console.log('Succes', data);

//     let container = document.getElementById('api2');
//     let stringHTML = `
//             <div class="col-md-4">
//                 <img src="${data.Poster}" class="card-img" alt="...">
//             </div>
//             <div class="col-md-8">
//                 <div class="card-body">
//                     <h5 class="title">${data.Title}</h5>
//                     <p class="director">${data.Director}</p>
//                     <p class="plot">${data.Plot}</p>
//                     <p class="runtime"><small class="text-muted">${data.Runtime}</small></p>
//                 </div>
//             </div>`;
//     container.insertAdjacentHTML('beforeend', stringHTML);
// });


// sun api => ophalen sunset & sunrise
//https://sunrise-sunset.org/api
    fetch(`https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400`)
    .then(response => response.json())
    .then(data => {
        console.log('Succes Galaxy api', data);
        let timeSun = data.results;
        let container = document.getElementById('api3');
        let stringHTML = `
                <div class="col-md-8">
                    <h2>Sun times </h2>
                    <div class="card-body">
                        <h5 class="title">${timeSun.sunset}</h5>
                        <p class="director">${timeSun.sunrise}</p>
                    </div>
                </div>`;
        container.insertAdjacentHTML('beforeend', stringHTML);
    });


    // geo location api => weather ad location
    //https://dev.qweather.com/en/help/data/
    // fetch(`https://devapi.qweather.com/v7/astronomy/moon?location=1E98E&date=20210220&lang=en&key=12334567890ABC`)
    // .then(response => response.json())
    // .then(data => {
    //     console.log('Succes Moon api', data);
    //     // let timeSun = data.results;
    //     // let container = document.getElementById('api4');
    //     // let stringHTML = `
    //     //         <div class="col-md-8">
    //     //             <h2>Sun times </h2>
    //     //             <div class="card-body">
    //     //                 <h5 class="title">${timeSun.sunset}</h5>
    //     //                 <p class="director">${timeSun.sunrise}</p>
    //     //             </div>
    //     //         </div>`;
    //     // container.insertAdjacentHTML('beforeend', stringHTML);
    // });


    // solar bodies api => solar objects with name en when discovered
    //https://api.le-systeme-solaire.net/en/
    fetch(`https://api.le-systeme-solaire.net/rest/bodies/`)
    .then(response => response.json())
    .then(data => {
        console.log('Succes Horoscope api', data);
        let star = data.bodies[129];
            let container = document.getElementById('api4');
            let stringHTML = `
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="title">${star.englishName}</h5>
                        <p class="director">${star.discoveredBy}</p>
                        <p class="director">${star.discoveryDate}</p>
                    </div>
                </div>`;
            container.insertAdjacentHTML('beforeend', stringHTML);
        
    });


    //https://docs.astronomyapi.com/endpoints/bodies
    //https://docs.astronomyapi.com/v/v2/
    
    fetch(`https://astronomy.p.rapidapi.com/api/v2/bodies/positions?latitude=33.775867&longitude=-84.39733&from_date=2017-12-20&to_date=2017-12-21&elevation=166&time=12%3A00%3A00"`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "astronomy.p.rapidapi.com",
            "x-rapidapi-key":  "9be1d5b610msh3495f5a406e8209p17ab70jsn4225d9cca09a"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Succes Stars api', data);
        let star = data;
            let container = document.getElementById('api5');
            let stringHTML = `
                <div class="col-md-8">
                    <div class="card-body">
                        <p class="director">${star.message}</p>
                    </div>
                </div>`;
        container.insertAdjacentHTML('beforeend', stringHTML);
        
    });