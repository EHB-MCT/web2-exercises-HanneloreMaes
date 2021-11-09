import Cleave from 'cleave.js';
require('cleave.js/dist/addons/cleave-phone.be');

var name = new Cleave('#name', {
    prefix: 'STUDENT-',
    uppercase: true
});

var birthDate = new Cleave('#geboorteDag', {
    date: true,
    delimiter: '-',
    datePattern: ['d', 'm', 'y']
});

var rijksNummer = new Cleave('#rrn', {
    blocks: [2,2,2,3,2],
    delimiter: ['.', '.', '-', '.']
});

var age = new Cleave('#age', {
    numeral: true,
    numeralPositiveOnly: true
});

var phone = new Cleave('#telefoonnr', {
    phone: true,
    phoneRegionCode: 'BE'
});

let containerForm = document.getElementById('formcontainer');
containerForm.addEventListener('submit', e => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;    
    const date = document.getElementById('geboorteDag').value;
    const rrnumber = document.getElementById('rrn').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('telefoonnr').value;

    document.getElementById('title').innerText = `${name} - Age ${age}`;
    document.getElementById('desc').innerText = `Born on ${date}. With National Insurance number ${rrnumber}`;
    document.getElementById('callme').innerText = `Call me: ${phone}`;
})