
/* Game Configurations */

const gameSettings = {
    playerNum: 2, // default 2 players 
    pokeDex: 151, // default 1st gen Pokemons only
    pokeNum: 3, // each player gets 3 Pokemons
    playerNames: ['rhine', 'chris'], // default names - to update later
    typeMatchUp: {}, // table matrix to determine attack effectiveness
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

/* Classes: Pokemon, Player */

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

    dealDamage(target) { // target is a Pokemon

        const coE = {
            overall: 0.1,
            constant: 1,
            sameTypeBonus: 1.25,
            randomLower: 15,
            randomUpper: 100,
        }
        
        // Damage calc formula: 0.1 * P * A / D * M + 1
        // P = Power of the move of the attacking Pokemon
        // A = Attack of the attacking Pokemon
        // D = Defense of the defending Pokemon 
        // M = Modifier = Random * STAB * TypeEffectiveness
            // Random = Random integer percentage between 0.85 and 1.00 (inclusive) 
            // STAB = Same Type Attack Bonus;  1.25 if Move type matches attacking Pokemon's type; else = 1 
            // TypeEffectiveness = Move (attacking Pokemon) type effectiveness against defending Pokemon's types 
        
        let p, a, d, m, random, damageNum;
        let stab = 1, typeE = 1;

        p = this.move.power
        a = this.attack
        d = target.defense
        random = Math.floor ( Math.random() * coE.randomLower + (coE.randomUpper - coE.randomLower) ) / 100

        for (let i = 0; i < this.types.length; i++) {
            stab *= (this.move.type === this.types[i]) ? coE.sameTypeBonus : 1;
        }

        for (let i = 0; i < target.types.length; i++) {
            typeE *= gameSettings.typeMatchUp[this.move.type][target.types[i]]
        }

        m = random * stab * typeE

        damageNum = Math.round(coE.overall * p * a / d * m + coE.constant) 

        console.log (`${upperFirstLetter(this.name)} used ${upperFirstLetter(this.move.name)} on ${upperFirstLetter(target.name)} and dealt ${damageNum} damage!`)

        return damageNum

    } 

    takeDamage(damageNum) {
        this.hp = (damageNum >= this.hp)? 0 : this.hp - damageNum 
    }

    isAlive() {
        return this.hp === 0
    }

}

class Player {
    constructor(name) {
        this.name = name,
        this.pokemon = [],
        this.status = 'active'
    }
}


/* Misc Helper Functions */

const getAllTypes = function (pokeDetails) {
    let types = [];
    pokeDetails.types.forEach (type => {
        types.push(type.type.name)
    })
    return types
}

const upperFirstLetter = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

/* Define helper variables for initializing Pokemons and Players */

let getTypeMatchById = []; // list of all the API Calls to get the type match up table 
let getPokemonById = []; // list of all the API Calls to get Pokemon details (* 6 times)
let getMoveByUrl = []; // API call to get Move details (1 per Pokemon)
let newPokemonList = []; // store all the generated Pokemons
let players = []; // store the Players

/* Main Functions for Initializing */

// Initialize Type Matchup Table (in gameSettings)

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

// Initialize Pokemons (* 6, 2 for each player)

const initPokemon = function () {

    for (let i = 0; i < gameSettings.pokeNum * gameSettings.playerNum; i++) {

        const randomID = Math.floor(Math.random() * gameSettings.pokeDex) + 1 // randomly generate an ID 

        getPokemonById.push( 
            $.ajax({
                url: `https://pokeapi.co/api/v2/pokemon/${randomID}`
            }).then(
                (data) => {
                    
                    const pokeID = data.id;
                    const pokeDetails = {
                        name: data.name,
                        types: data.types,
                        move: data.moves,
                        stats: data.stats,
                        pics: data.sprites,
                    }

                    newPokemonList.push(new Pokemon(pokeID, pokeDetails))

                },
                (error) => {
                    console.log('bad request: ',error);
                }
            )
        )
    }
}

// Initialize a random move for each Pokemon

const initMove = function(Pokemon) {

        let randomIdx = Math.floor(Math.random() * Pokemon.move.length)
        let moveUrl = Pokemon.move[randomIdx]['move']['url']
        const moveDetails = {
            power: null,
            type: null,
            name: null,
        }
        
            $.ajax({ url: moveUrl }).then(
                (data) => {
                    moveDetails.power = data.power
                    moveDetails.type = data.type.name
                    moveDetails.name = data.name

                    if (moveDetails.power !== null) {
                        Pokemon.move = moveDetails
                        return 
                    } else {
                        initMove(Pokemon)                        

                    }
                },
                (error) => {
                    console.log('bad request: ',error);
                }
            )
    }

// Initialize Players 

const initPlayers = function() {
    
    players = [new Player(gameSettings.playerNames[0]), new Player(gameSettings.playerNames[1])]
    players[0].pokemon = newPokemonList.slice(0,3)
    players[1].pokemon = newPokemonList.slice(3,6)
        
}

/* Main Script */

initTypeMatch() // fill the gameSettings with type matchup table

$.when.apply($, getTypeMatchById).done(function() { // after the type matchup table is filled
    
    initPokemon() // initalize Pokemons (with all details including move assignment)

    $.when.apply($, getPokemonById).done(function() { // after Pokemon initialization

        for (let i = 0; i < newPokemonList.length; i++) {
            initMove(newPokemonList[i])
        }
        
        initPlayers() // initialize Players
        console.log(players, newPokemonList)

    })
    
})