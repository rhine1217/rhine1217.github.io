
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


class Pokemon {
    constructor(id, pokeDetails) {
        this.id = id,
        this.name = pokeDetails.name,
        this.types = getAllTypes(pokeDetails), // can have 1 or 2 types 
        this.move = pokeDetails.move, // assign a random move
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
let getMoveByUrl;
let newPokemonList = [];
let players = [];

const initPokemon = function () {

    for (let i = 0; i < gameSettings.pokeNum * gameSettings.playerNum; i++) {

    // randomly generate an ID 

        const randomID = Math.floor(Math.random() * gameSettings.pokeDex) + 1 

        getPokemonById.push( 
        
            $.ajax({
                url: `https://pokeapi.co/api/v2/pokemon/${randomID}`

            }).then(
                (data) => {
                    
                    const pokeID = data.id;
                    const pokeDetails = {
                        name: data.name,
                        types: data.types,
                        move: null,
                        stats: data.stats,
                        pics: data.sprites,
                    }

                    let moveUrl = data.moves[Math.floor(Math.random() * data.moves.length) + 1].move.url

                    const moveDetails = {
                        power: null,
                        type: null,
                        name: null,
                    };

                    initMove(moveUrl, moveDetails)

                    $.when(getMoveByUrl).done(function() {

                        if (moveDetails.power !== null) {
                            pokeDetails.move = moveDetails 
                            console.log(pokeDetails) // tester
                            newPokemonList.push(new Pokemon(pokeID, pokeDetails))
                        } else {
                            moveUrl = data.moves[Math.floor(Math.random() * data.moves.length) + 1].move.url
                            initMove(moveUrl, moveDetails)
                            $.when(getMoveByUrl).done(function() {
                                if (moveDetails.power !== null) {
                                    pokeDetails.move = moveDetails
                                    console.log(pokeDetails)
                                    newPokemonList.push(new Pokemon(pokeID, pokeDetails))
                                } else {
                                    console.log('still power is null')
                                }
                            })
                        }

                    })

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



const initMove = function(moveUrl, moveDetails) {

    getMoveByUrl = 
    
        $.ajax({ url: moveUrl }).then(
        
            (data) => {
                moveDetails.power = data.power
                moveDetails.type = data.type.name
                moveDetails.name = data.name
            },

            (error) => {
                console.log('bad request: ',error);
            }
        )
}