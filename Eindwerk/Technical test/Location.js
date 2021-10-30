"use strict";

//Made by Joni De Borger

class LocationFinder {
  constructor() {
    this._location = null;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => { 
        this.location = {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        };
        //locationCallback(this.location);
      });
    } else {
      console.log( "Geolocation is not supported by this browser.");
    }
  }
}


export default LocationFinder;

//Made by Joni De Borger