"use strict"; 

class LocationTracker {
  constructor() {
    this._location = null;
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
            //console.log('Succes2', town[0]);
            this.location = {
              city: town,
            };
            console.log('this.location', this.location);
            let hellow = this.location.city;
            //console.log('Top', hellow);

            return hellow;
        });
        //console.log('Hellow voor if', this.hellow);
      });
    } else {
      //console.log( "Geolocation is not supported by this browser.");
    }
    this._location = this.hellow;
    //console.log('Locatie na if', this._location);
  }
}

export default LocationTracker;


// class LocationTracker {
//   constructor() {

//   }
//   get townLocation(){

//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition((position) => {
//           const lat = position.coords.latitude;
//           const lon = position.coords.longitude;
//         fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=cf2adb444cd94e24ab41876ff1f5272f`)
//           .then(response => response.json())
//           .then(data => {
//             console.log('Succes', data.results);
//             let locatie = data.results;
//             let town = locatie.map(obj => obj.components.town);
//             console.log('Succes2', town[0]);
            
//             const hellow = town[0];
//           });
//         });
//         console.log('Top', hellow);
//         return hellow;
//       }
//   }
//   }

// export default LocationTracker;
