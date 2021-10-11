"use strict";

import Team from '../2/Team.js';

let team1 = new Team();

    let formEvent = document.getElementById('form').addEventListener('submit', e => {
        e.preventDefault();

        let name = document.getElementById("nameInputs").value;
        let trainer = document.getElementById("trainerInputs").value;

        team1.teamname = name;
        team1.trainer = trainer;

        console.log('Input player', formEvent);
    })

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
                        <button type="button" class="btn" id="${data2.name}">Take me home :)</button>`;
                    
                        container.insertAdjacentHTML('beforeEnd', htmlString);
                

                    let button = document.getElementById(`${data2.name}`);
                    button.addEventListener('click', e => buttonHandler(e));
    
                })
        })
        
    })

    

function buttonHandler(e){
    e.preventDefault();
    //console.log(`Test ButtonHandler ${e.target.id}`);
    let id = e.target.id;
    //console.log('Id Target', id);
    //console.log('Pushen naar roster', team1.roster);

    let listPokémon = team1.roster;
    listPokémon.push(id);
    // refreshTeam(); 

    if (listPokémon.length < 6){
        refreshTeam();
    } else if (listPokémon.length >= 6){
        let errorContainer = document.getElementById('error');
        let message = `
            <h3>ERROR</h3>
            <p>You chose more pokémons than allowed!
            Refresh page and chose again</p>`;
        
            errorContainer.insertAdjacentHTML('beforeend', message);
    }
    

}

function refreshTeam(){
    let refreshContainer = document.getElementById('team');
    refreshContainer.innerHTML =team1.describe();
}
