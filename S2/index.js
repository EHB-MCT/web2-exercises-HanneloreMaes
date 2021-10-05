"use strict";

fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    .then(response => response.json())
    .then(data => {
        console.log('Succes', data)
        //console.log('test', data.results)
        let pokémon = data.results        
        pokémon.forEach(poke => {
            //console.log('forEach', poke)
            fetch(poke.url)
                .then (response2 => response2.json())
                .then(data2 => {
                    console.log('Succes 2', data2);
                    //console.log('Types', data2.types);
                    let container = document.getElementById('blokske');
                    let htmlString = `
                        <h2>${data2.name}</h2>
                        <img src="${data2.sprites.front_default}" alt="pokémonImg">
                        <p>Type: ${data2.types[0].type.name}</p>
                        <button type="submit">Take me home :)</button>`;
                    
                        container.insertAdjacentHTML('beforeEnd', htmlString);
                })
        })
        
    })
