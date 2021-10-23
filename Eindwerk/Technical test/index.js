"use strict";

// special galaxy api => ophalen notificaties 
// https://api.nasa.gov/ => Coronal Mass Ejection (CME)

fetch(`https://api.nasa.gov/DONKI/notifications?startDate=2014-05-01&endDate=2014-05-08&type=all&api_key=3mLhSkJOLNh6zUKdf7aUjI9roVHmNMdANf2ziKoK`)
.then(response => response.json())
.then(data => {
    console.log('Succes Nasa', data);
    let galaxy = data[0];
    //console.log('URL', galaxy.messageBody);

    let container1 = document.getElementById('api1');
    let stringHTML1 = `
        <div class="col-md-8">
            <h2>Special galaxy stuff </h2>
            <div class="card-body">
                <h5 class="title">${galaxy.messageType}</h5>
                <p class="director">${galaxy.messageIssueTime}</p>
                <p class="plot">${galaxy.messageBody}</p>
            </div>
        </div>`;
    container1.insertAdjacentHTML('beforeend', stringHTML1);
});


    // data moon and sun: geotracker
    // https://ipgeolocation.io/documentation/astronomy-api.html
    fetch(`https://api.ipgeolocation.io/astronomy?apiKey=beb03411ca57456b8140cb4d08c8086d`, {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {
        console.log("Succes Location API", data);

        let container4 = document.getElementById('api4');
        let stringHTML4 = `
                <div class="col-md-8">
                    <h2>GEOlocation</h2>
                    <div class="card-body">
                        <h5 class="title">${data.date}</h5>
                        <p class="director">${data.moonrise}</p>
                    </div>
                    <div class="card-body1">
                        <h5 class="title1">${data.sunset}</h5>
                        <p class="director1">${data.sunrise}</p>
                    </div>
                </div>`;
        container4.insertAdjacentHTML('beforeend', stringHTML4);
    })

    // solar bodies api => solar objects with name en when discovered
    //https://api.le-systeme-solaire.net/en/
    fetch(`https://api.le-systeme-solaire.net/rest/bodies/`)
    .then(response => response.json())
    .then(data => {
        console.log('Succes Horoscope api', data);
        let star = data.bodies[129];
            let container5 = document.getElementById('api5');
            let stringHTML5 = `
                <div class="col-md-8">
                <h2>Special Stars with name</h2>
                    <div class="card-body">
                        <h5 class="title">${star.englishName}</h5>
                        <p class="director">${star.discoveredBy}</p>
                        <p class="director">${star.discoveryDate}</p>
                    </div>
                </div>`;
            container5.insertAdjacentHTML('beforeend', stringHTML5);
        
    });


//     // geo location api => weather ad location
//     //https://dev.qweather.com/en/help/data/
//     // fetch(`https://devapi.qweather.com/v7/astronomy/moon?location=1E98E&date=20210220&lang=en&key=12334567890ABC`)
//     // .then(response => response.json())
//     // .then(data => {
//     //     console.log('Succes Moon api', data);
//     //     // let timeSun = data.results;
//     //     // let container = document.getElementById('api4');
//     //     // let stringHTML = `
//     //     //         <div class="col-md-8">
//     //     //             <h2>Sun times </h2>
//     //     //             <div class="card-body">
//     //     //                 <h5 class="title">${timeSun.sunset}</h5>
//     //     //                 <p class="director">${timeSun.sunrise}</p>
//     //     //             </div>
//     //     //         </div>`;
//     //     // container.insertAdjacentHTML('beforeend', stringHTML);
//     // });





    // //https://docs.astronomyapi.com/endpoints/bodies
    // //https://docs.astronomyapi.com/v/v2/

    //const hash = btoa(`${applicationId}:${applicationSecret}`);
    // fetch(`https://api.astronomyapi.com/api/`, {
    //     "apiEndpoint": "https://api.astronomyapi.com",
    //     "appId": "905f504d-c3ff-47c0-a807-fdc02438a59f",
    //     "appSecret": "81e368486d9d82b3e3551fb553c948f9ccb5a46d351bf074a8d331d469220a4f1efdbd9e81f685daad2adcbcede312a25a6f209a89640b802e70011589bd677c3acf4bf1ff07e9d52272f69267d706174cbf68763fe9cdc70b051431ff0ae533b506404f8467ecdf43853637acf48c90"
    //     // method: 'GET',
    //     // headers: {
    //     //     'Authorization': 'Basic <hash>'
    //     // },
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log('Succes Stars api', data.message);
    //     let star = data;
    //         let container = document.getElementById('api5');
    //         let stringHTML = `
    //             <div class="col-md-8">
    //                 <div class="card-body">
    //                     <p class="director">${star.message}</p>
    //                 </div>
    //             </div>`;
    //     container.insertAdjacentHTML('beforeend', stringHTML);
    // })
    
    
// // sun api => ophalen sunset & sunrise
// //https://sunrise-sunset.org/api
//     fetch(`https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400`)
//     .then(response => response.json())
//     .then(data => {
//         console.log('Succes Sun api', data);
//         let timeSun = data.results;
//         let container2 = document.getElementById('api3');
//         let stringHTML2 = `
//                 <div class="col-md-8">
//                     <h2>Sun times </h2>
//                     <div class="card-body">
//                         <h5 class="title">${timeSun.sunset}</h5>
//                         <p class="director">${timeSun.sunrise}</p>
//                     </div>
//                 </div>`;
//         container2.insertAdjacentHTML('beforeend', stringHTML2);
//     });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//  // weather api -> ophalen plaats en weer 
// // https://openweathermap.org/current

// fetch(`api.openweathermap.org/data/2.5/weather?q=London&appid={8532eda8a091632f5428caff44d04e73}`)
// .then(response => response.json())
// .then(data => {
//     console.log('Succes Weathermap', data);

//     // let container = document.getElementById('api2');
//     // let stringHTML = `
//     //         <div class="col-md-4">
//     //             <img src="${data.Poster}" class="card-img" alt="...">
//     //         </div>
//     //         <div class="col-md-8">
//     //             <div class="card-body">
//     //                 <h5 class="title">${data.Title}</h5>
//     //                 <p class="director">${data.Director}</p>
//     //                 <p class="plot">${data.Plot}</p>
//     //                 <p class="runtime"><small class="text-muted">${data.Runtime}</small></p>
//     //             </div>
//     //         </div>`;
//     // container.insertAdjacentHTML('beforeend', stringHTML);
// });
