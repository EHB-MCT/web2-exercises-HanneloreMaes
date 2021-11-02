"use strict"; 





class LocationTracker {
  constructor() {
    this.test = 1232132;
  }
  async getData(){
    //this._location = 200;
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
            // let location = {
            //   city: town,
            // };
            console.log('this.location', town);
            this.test = town;
            console.log("h", this.test)
            return this.test
            //console.log('Top', hellow);
            // this._location = hellow;
            // console.log('Kat', this._location)
          
        });
        console.log(this.test)
        //console.log('Hellow voor if', this.hellow);
      });
    } else {
      //console.log( "Geolocation is not supported by this browser.");
    }
    
    //console.log('Locatie na if', this._location);
  }
  getTest() {
    return this.test;
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
