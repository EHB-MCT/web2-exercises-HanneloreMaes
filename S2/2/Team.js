"use strict";

class Team {
    constructor(Name, Trainer){
        this.teamname = Name;
        this.trainer = Trainer;
        this.roster = [];
    }
    describe(){
        let description = `Goodluck ${this.trainer} with ${this.teamname} and these pokémons ${[...this.roster]}. May the best team win!`;

        return description
    }
}

export default Team;