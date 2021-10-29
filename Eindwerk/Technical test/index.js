"use strict";

window.onload = function(){
    let submitForm = document.getElementById("searchform").addEventListener("submit", e => {
        e.preventDefault();
        let inputPlaces = document.getElementById("inputPlace").value;
        geoTracker(inputPlaces);
    })
}


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


function geoTracker(inputPlaces){
    // data moon and sun: geotracker
    // https://ipgeolocation.io/documentation/astronomy-api.html
    fetch(`https://api.ipgeolocation.io/astronomy?apiKey=beb03411ca57456b8140cb4d08c8086d&location=${inputPlaces}`, {
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
}
    

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




    const applicationId = '75984ac7-bbf1-415d-b767-7ce18ea523f2';
    const applicationSecret = '81e368486d9d82b3e3551fb553c948f9ccb5a46d351bf074a8d331d469220a4f1efdbd9e81f685daad2adcbcede312a25a6f209a89640b802e70011589bd677c6d90cf7bfec54bab199df9012596d1d30a0e0a09e633d929aa906128d5cbe116ccb8ab6b8dbea93441c6d8ea4d19c521';
    const hash = btoa(`${applicationId}:${applicationSecret}`);
    //console.log('Hellow', hash);

    fetch(`https://api.astronomyapi.com/api/v2/bodies/`,{
        headers: {
            'Authorization': 'Basic <hash>',
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log("Astronomy Data", data)
    })

    
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
