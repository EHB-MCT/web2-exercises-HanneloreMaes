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