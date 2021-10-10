"use strict";

import Team from '../2/Team.js';

let team1 = new Team();

    fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    .then(response => response.json())
    .then(data => {
        //console.log('Succes', data)
        //console.log('test', data.results)
        let pokémon = data.results        
        pokémon.forEach(poke => {
            //console.log('forEach', poke)
            fetch(poke.url)
                .then (response2 => response2.json())
                .then(data2 => {
                    //console.log('Succes 2', data2);

                    let pokémonData = data2.types;
                    //console.log('giyefgyfs', hello);
                    let types = pokémonData.map(obj => obj.type.name);
                    //console.log('Types', types);
                    
                    let container = document.getElementById('blokske');
                    let htmlString = `
                        <h2>${data2.name}</h2>
                        <img src="${data2.sprites.front_default}" alt="pokémonImg">
                        <p>Type: ${types}</p>
                        <button type="button" class="btn${data2.id}" id="${data2.id}">Take me home :)</button>`;
                    
                        container.insertAdjacentHTML('beforeEnd', htmlString);
                

                    let button = document.getElementById(`${data2.id}`);
                    button.addEventListener('click', e => buttonHandler(e));
    
                })
        })
        
    })

    

refreshTeam();

function buttonHandler(e){
    e.preventDefault();
    console.log(`Test ButtonHandler ${e.target.id}`);

    let id = e.target.id;
    console.log('Id Target', id);
}

function refreshTeam(){
    let refreshContainer = document.getElementById('team');
    refreshContainer.innerHTML = team1.describe();
}
