// // create a Pokemon class 

const gameSettings = {
    playerNum: 2, // default 2 players 
    pokeDex: 151,
    pokeNum: 3,
    playerNames: ['rhine', 'chris'],
}

class Pokemon {
    constructor(id, name, types, moves) {
        this.id = id,
        this.name = name,
        this.type = types[0]['type']
        this.move = moves[0]['move']
    }

    // attack() {

    // } 

    // takeDamage() {

    // }

    // isAlive() {

    // }

}

class Player {
    constructor(name) {
        this.name = name,
        this.pokemon = [],
        this.status = 'active'
    }
}

// class Move {
//     constructor(id) {
//         this.id = id,
//         this.name = 'move',
//         this.type = '',
//         this.damage = '',
//     }
// }




let getPokemonById = []; // list of all the API Calls
let newPokemonList = [];
let players = [];

const initPokemon = function () {

    let randomID, pokeID, pokeName, pokeTypes, pokeMoves;
    
    for (let i = 0; i < gameSettings.pokeNum * gameSettings.playerNum; i++) {

    // randomly generate an ID 

        randomID = Math.floor(Math.random() * gameSettings.pokeDex) + 1 

        getPokemonById.push( 
        
            $.ajax({
                url: `https://pokeapi.co/api/v2/pokemon/${randomID}`

            }).then(
                (data) => {
                    
                    // console.log(pokeID) // tester
                    // console.log(data) // tester
                    
                    pokeID = data.id;
                    pokeName = data.name;
                    pokeTypes = data.types;
                    pokeMoves = data.moves;
                
                    newPokemonList.push(new Pokemon(pokeID, pokeName, pokeTypes, pokeMoves))

                },

                (error) => {
                    console.log('bad request: ',error);
                }
            )
        )
    }
}


const initPlayers = function() {
    
    players = [new Player(gameSettings.playerNames[0]), new Player(gameSettings.playerNames[1])]
    
    players[0].pokemon = newPokemonList.slice(0,3)
    players[1].pokemon = newPokemonList.slice(3,6)
        
}

initPokemon()

$.when.apply($, getPokemonById).done(function() {
    console.log(newPokemonList)
    initPlayers()
    console.log(players)
})

