"use strict";

let dishes = [{
    id: 1,
    name: 'Burger',
    price: 8

}, {
    id: 2,
    name: 'Fries',
    price: 3,
}, {
    id: 3,
    name: 'McFlurry',
    price: 6,
}];

window.onload = function(){
    console.log('Succes');

    let formEvent = document.getElementById('form');
    formEvent.addEventListener('submit', e => {
        e.preventDefault();

        let name = document.getElementById("nameInputs").value;
        let email = document.getElementById("emailInputs").value;
        let order = document.querySelector("input[name='dish']:checked").value;

        
        let dish = dishes.find(d => d.id == order);            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
                                                              // d.id staat voor de id dat meegegeven is in object dishes.
        
        let orderScript = {
            name, email, dish
        }
        document.getElementById('messages').innerHTML = messagePrint(orderScript);

    })

}

function messagePrint(orderScript){
    console.log('Sort Dish', orderScript.dish);
    return `<p> The order for the customer ${orderScript.name} is the following: ${orderScript.dish.name}. The customer may be notified by email: ${orderScript.email}. </p>`;
}



// const form = {
//     initfields(){
//         const formEvent = document.getElementById("form");
//         // const formEvent = document.getElementsByClassName('buttonSub');
//         formEvent.addEventListener('submit', this.submitHandler)
//     },

//     submitHandler(e){
//         e.preventDefault();
//         console.log('Succes');
        
//         let name = document.getElementById("nameInputs").value;
//         let email = document.getElementById("emailInputs").value;
//         let order = document.getElementById("orderInputs").value;

//         document.getElementById("input").innerHTML= getMessage(name,email,order);
//     },
//     getMessage(b,c,d){
//         let a = `Order for ${b} is ordered. Order: ${c}. Confirmation is send to ${d}.`
        
//         return a
//     }

// }