
const gameSettings = {
    playerNum: 2, // default 2 players 
    pokeDex: 151,
    pokeNum: 3,
    playerNames: ['rhine', 'chris'],
    typeMatchUp: {},
}

const defaultTypeObj = {
    "flying":1,
    "fairy":1, 
    "rock":1, 
    "grass":1, 
    "ice":1, 
    "dark":1, 
    "normal":1, 
    "poison":1, 
    "water":1, 
    "bug":1, 
    "ghost":1, 
    "dragon":1, 
    "fire":1, 
    "electric":1, 
    "fighting":1, 
    "psychic":1, 
    "steel":1, 
    "ground":1
}


let getTypeMatchById = [];

const initTypeMatch = function() {
    for (let i = 1; i < 19; i++) {
    
    getTypeMatchById.push(
            $.ajax({
                url: `https://pokeapi.co/api/v2/type/${i}`

            }).then(
                (data) => {

                    gameSettings.typeMatchUp[data.name] = { ...defaultTypeObj}

                    data['damage_relations']['double_damage_to'].forEach(type => {
                        gameSettings.typeMatchUp[data.name][type.name] = 2
                    })

                    data['damage_relations']['half_damage_to'].forEach(type => {
                        gameSettings.typeMatchUp[data.name][type.name] = 0.5
                    })

                    data['damage_relations']['no_damage_to'].forEach(type => {
                        gameSettings.typeMatchUp[data.name][type.name] = 0
                    })

                },

                (error) => {
                    console.log('bad request: ',error);
                })
    )}
}

initTypeMatch()

$.when.apply($, getTypeMatchById).done(function() {
    
    initPokemon()

    $.when.apply($, getPokemonById).done(function() {

        initPlayers()

    })
    
})

const getAllTypes = function (pokeDetails) {
    let types = [];
    pokeDetails.types.forEach (type => {
        types.push(type.type.name)
    })
    return types
}

const getRandomMove = function(pokeDetails) {

}

class Pokemon {
    constructor(id, pokeDetails) {
        this.id = id,
        this.name = pokeDetails.name,
        this.types = getAllTypes(pokeDetails), // can have 1 or 2 types 
        this.move = pokeDetails.moves[0]['move'], // choose a random move - this needs to be a Move object 
        this.hp = pokeDetails.stats[0]['base_stat'],
        this.attack = pokeDetails.stats[1]['base_stat'],
        this.defense = pokeDetails.stats[2]['base_stat'],
        this.pics = pokeDetails.pics
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

    let randomID, pokeID;
    
    for (let i = 0; i < gameSettings.pokeNum * gameSettings.playerNum; i++) {

    // randomly generate an ID 

        randomID = Math.floor(Math.random() * gameSettings.pokeDex) + 1 

        getPokemonById.push( 
        
            $.ajax({
                url: `https://pokeapi.co/api/v2/pokemon/${randomID}`

            }).then(
                (data) => {
                    
                    pokeID = data.id;
                    pokeDetails = {
                        name: data.name,
                        types: data.types,
                        moves: data.moves,
                        stats: data.stats,
                        pics: data.sprites,
                    }

                    // console.log(pokeDetails)

                    newPokemonList.push(new Pokemon(pokeID, pokeDetails))

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



