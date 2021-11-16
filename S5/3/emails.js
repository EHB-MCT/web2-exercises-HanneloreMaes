//const axios = require('axios').default;      //require nodig om node_module op te halen. De naam van module staat tussen de haakjes
import axios from 'axios';
import * as fs from 'fs/promises';


let response = await axios.get('https://jsonplaceholder.typicode.com/comments');   //ophalen van de comments met de 'fetch' call van axios
console.log(response.data[0]);
console.log(response.data[0].email);

let emails = {
    count: 0,
    list: []
}

for (let comment of response.data){
    emails.list.push(comment.email);
    emails.count++;
}

await fs.appendFile('emails.json', JSON.stringify(emails));