"use strict";

const form = {
    initfields(){
        const formEvent = document.getElementById("form");
        // const formEvent = document.getElementsByClassName('buttonSub');
        formEvent.addEventListener('submit', this.submitHandler)
    },

    submitHandler(e){
        e.preventDefault();
        console.log('Succes');
        
        let name = document.getElementById("nameInputs").value;
        let email = document.getElementById("emailInputs").value;
        let order = document.getElementById("orderInputs").value;

        document.getElementById("input").innerHTML= getMessage(name,email,order);
    },
    getMessage(b,c,d){
        let a = `Order for ${b} is ordered. Order: ${c}. Confirmation is send to ${d}.`
        
        return a
    }

}