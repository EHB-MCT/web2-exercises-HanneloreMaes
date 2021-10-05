"use strict";

fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    .then(response => response.json())
    .then(data => {
        console.log('Succes', data)
        //console.log('test', data.results)
        let pokémon = data.results
        pokémon.forEach(e => {
            //console.log('forEach', e)
            fetch(`https://pokeapi.co/api/v2/pokemon/1/`)
                .then (response2 => response2.json())
                .then(data2 => {
                    console.log('Succes 2', data2);
                    console.log('Types', data2.types);
                    let container = document.getElementById('blokske');
                    let htmlString = `
                        <img src="" alt="pokémonImg">
                        <h2>${data2.name}</h2>
                        <p>Type: ${data2.types}</p>
                        <button type="submit"></button>`;
                    
                        container.insertAdjacentHTML('beforeEnd', htmlString);
                })
        })
        
    })
