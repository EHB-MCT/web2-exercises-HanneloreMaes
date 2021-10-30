"use strict"; 

class LocationTracker {
  constructor() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=cf2adb444cd94e24ab41876ff1f5272f`)
          .then(response => response.json())
          .then(data => {
            console.log('Succes', data.results);
            let locatie = data.results;
            let town = locatie.map(obj => obj.components.town);
            console.log('Succes', town);
          });
      });
    } else {
      console.log( "Geolocation is not supported by this browser.");
    }
  }
}

export default LocationTracker;
  
  