import * as fs from 'fs/promises';

let results = await fs.readFile('boardgames.json');    // inlezen van de json file boardgames, altijd await gebruiken omdat deze async moet ingeladen worden
let data = JSON.parse(results);                        // om de ingelezen file bij results om te zetten naar een leesbare code voor data
//console.log(data);

// loopen over de data van boardgames
for (let i in data){
    //console.log(i);                                    // krijgt properties terug omdat een forloop loopt over properties van data
    //console.log(data[i]);                              // zet de string i om naar een object
    let filename = `${i}.json`;
    let bg = JSON.stringify(data[i]);
    await fs.writeFile(filename,bg)

}