"use strict";

window.onload = function(){
    console.log('Succes');

    let formEvent = document.getElementById('form').addEventListener('submit', e => {
        e.preventDefault();

        let name = document.getElementById("nameInputs").value;
        let email = document.getElementById("emailInputs").value;
        let order = document.getElementById("orderInputs").value;

        let orderScript = {
            name, email, order
        }

        document.getElementById('messages').innerHTML = messagePrint(orderScript);

    })

}

function messagePrint(orderScript){
    return `<p> The order for the customer ${orderScript.name} is the following: ${orderScript.order}. The customer may be notified by email: ${orderScript.email}. </p>`
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