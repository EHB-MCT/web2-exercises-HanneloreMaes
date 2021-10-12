"use strict";

let random = 0;
getPlayerNumber();




function getPlayerNumber() {
    document.getElementById('form').addEventListener('click', e => {
        e.preventDefault();
        getRandomNumber();
        console.log(random)
        compareNumber(document.getElementById('input').value).then(
            result => {
                alert("You have guessed the mystery number!")
                console.log("good")
            },
            error => {
                alert("")
                console.log("wrong")
            }
        )
        let playerInput = document.getElementById('input').value;
        // document.getElementById('message').innerText = random;
    })


};

function getRandomNumber() {
    random = Math.floor(Math.random() * 20) + 1;
    return random;
    // console.log(random);
};

function compareNumber(playerInput) {
    return new Promise((resolve, reject) => {
        if (playerInput > random) {
            reject("to high")

        } else if (playerInput < random) {
            reject("Whoops!")
        } else if (playerInput == random) {
            resolve("U guessed the mystery number")
        }
    })


};