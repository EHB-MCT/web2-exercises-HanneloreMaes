"use strict";


//const apiKey = "3mLhSkJOLNh6zUKdf7aUjI9roVHmNMdANf2ziKoK";

    fetch(`http://localhost:8090/api/objects/info?name=leo&format=json`)
    .then(response=>response.json())
    .then(data => {
      console.log('Succes', data);
    })
