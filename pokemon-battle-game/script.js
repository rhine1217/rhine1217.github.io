/* Game Configurations */

const gameSettings = {
    playerNum: 2, // default 2 players 
    pokeDex: 151, // default 1st gen Pokemons only
    pokeNum: 3, // each player gets 3 Pokemons
    playerNames: ['Player', 'Computer'], // default names - to update later
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

const imageLookup = [
    '001 - ymJUN7U.png',
    '002 - DCaYciP.png',
    '003 - 1gHPLm5.png',
    '004 - MNzvfqa.png',
    '005 - 90S0I9j.png',
    '006 - r8ZF3pM.png',
    '007 - ycqwZ7F.png',
    '008 - UutwOLy.png',
    '009 - 5S3V3Ma.png',
    '010 - EVIapxI.png',
    '011 - RJJ4006.png',
    '012 - fWgniBU.png',
    '013 - DTsVdfw.png',
    '014 - XfTXZ2D.png',
    '015 - vs84aso.png',
    '016 - Cj3S60J.png',
    '017 - YrqNkg7.png',
    '018 - T9T6T30.png',
    '019 - iQXgSxJ.png',
    '020 - HSCJyEo.png',
    '021 - ureVsLT.png',
    '022 - i0w85Sz.png',
    '023 - aUgcmbF.png',
    '024 - br8pFPd.png',
    '025 - BnOQ18z.png',
    '026 - 2Sp8593.png',
    '027 - EGJWEBk.png',
    '028 - A6ECbwQ.png',
    '029 - vqNwhzl.png',
    '030 - nTVQ75H.png',
    '031 - NzXuCD9.png',
    '032 - iENSWu9.png',
    '033 - hARIT9D.png',
    '034 - uFZqzQU.png',
    '035 - O9BA2uQ.png',
    '036 - MCJj790.png',
    '037 - u1VR5u0.png',
    '038 - SImNjAx.png',
    '039 - dF0ZRCl.png',
    '040 - e05K5Tq.png',
    '041 - zTdCLkq.png',
    '042 - zkfElVm.png',
    '043 - aFXJNxI.png',
    '044 - jFWbtsn.png',
    '045 - eBSLE2F.png',
    '046 - UI9IJYa.png',
    '047 - rQOKlaQ.png',
    '048 - dJL31dl.png',
    '049 - AKWhjP0.png',
    '050 - 5iv8hp5.png',
    '051 - WtqvAfR.png',
    '052 - lVJTzjB.png',
    '053 - NQmKZBk.png',
    '054 - 5oKgqAg.png',
    '055 - CmRVgp9.png',
    '056 - QVTM4EC.png',
    '057 - iCw1Bwp.png',
    '058 - 3dp8P4x.png',
    '059 - TsETbW4.png',
    '060 - 0KDpuwc.png',
    '061 - FHrTMQ7.png',
    '062 - kdRYTTA.png',
    '063 - HVf31Nt.png',
    '064 - HTDMVDu.png',
    '065 - lWuakd3.png',
    '066 - 2gOvfj7.png',
    '067 - nlVUpZ1.png',
    '068 - RkZ7x9t.png',
    '069 - Ud6kfQB.png',
    '070 - 7Oy1Y72.png',
    '071 - biJh43I.png',
    '072 - PabjRP7.png',
    '073 - 7G8pusr.png',
    '074 - myxLsuy.png',
    '075 - gj6hTsv.png',
    '076 - Ov3Xi5D.png',
    '077 - Dpsrtbs.png',
    '078 - x0d1S21.png',
    '079 - 0OOeyrp.png',
    '080 - Htf87t2.png',
    '081 - 5zi8vAG.png',
    '082 - BdESZy9.png',
    '083 - XnqjFsM.png',
    '084 - eqOCGrR.png',
    '085 - cbqTgrp.png',
    '086 - 2mNFvL0.png',
    '087 - MgXvgJW.png',
    '088 - kh204Iq.png',
    '089 - 8NhsOW6.png',
    '090 - Oc1j106.png',
    '091 - 7kFnrm1.png',
    '092 - h3tg4lW.png',
    '093 - jlvwXEU.png',
    '094 - Hx8Sgw8.png',
    '095 - 1yUYB2n.png',
    '096 - 63MYvi7.png',
    '097 - jWuW7sJ.png',
    '098 - GAHQ7ye.png',
    '099 - qVMrynz.png',
    '100 - GzAwoav.png',
    '101 - cBJ3w6x.png',
    '102 - 0129S9l.png',
    '103 - cPkex57.png',
    '104 - DVuaDMu.png',
    '105 - vPxlv6k.png',
    '106 - nW3smRT.png',
    '107 - uoQXXro.png',
    '108 - Y41SRfo.png',
    '109 - QvPXbfV.png',
    '110 - kmgvhIM.png',
    '111 - yvuf7wl.png',
    '112 - Oh56NFH.png',
    '113 - 6jyJFKm.png',
    '114 - MQQY2Bs.png',
    '115 - YkfXVty.png',
    '116 - Zyo7iSM.png',
    '117 - UFCJSbX.png',
    '118 - TAvBe2F.png',
    '119 - IdO4QIt.png',
    '120 - D7XRVmV.png',
    '121 - y4HHa5B.png',
    '122 - 4zr2HZD.png',
    '123 - K0xPLzF.png',
    '124 - CX19LWc.png',
    '125 - hZRjJBy.png',
    '126 - kpgf6qQ.png',
    '127 - OadxgAL.png',
    '128 - hd6bopy.png',
    '129 - SSuiC97.png',
    '130 - mEEKjq9.png',
    '131 - HYnhh6c.png',
    '132 - qYogFDI.png',
    '133 - HtUZ8Bl.png',
    '134 - LfOzBxH.png',
    '135 - BW3N08O.png',
    '136 - cyZaJ07.png',
    '137 - xInNIfi.png',
    '138 - 8INXWPB.png',
    '139 - pvxTe5W.png',
    '140 - zdLO8tF.png',
    '141 - XGrS6EC.png',
    '142 - kpPbAYn.png',
    '143 - tfBZzDZ.png',
    '144 - yvJwaWi.png',
    '145 - 4r4lk4n.png',
    '146 - r4V1Ycq.png',
    '147 - DD8XZKu.png',
    '148 - Z8GSzJ6.png',
    '149 - F24yDag.png',
    '150 - aKrsM5t.png',
    '151 - 4vTIa6H.png',
]

/* Classes: Pokemon */

class Pokemon {
    constructor(id, pokeDetails) {
        this.id = id,
        this.name = pokeDetails.name,
        this.types = getAllTypes(pokeDetails), // can have 1 or 2 types 
        this.move = pokeDetails.move, // assign a random move
        this.hp = pokeDetails.stats[0]['base_stat'],
        this.attack = pokeDetails.stats[1]['base_stat'],
        this.defense = pokeDetails.stats[2]['base_stat'],
        this.currHP = this.hp
    }

    dealDamage(target) { // target is a Pokemon

        const coE = {
            overall: 0.25,
            constant: 1,
            sameTypeBonus: 1.25,
            randomLower: 60,
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
        random = Math.floor ( Math.random() * (coE.randomUpper - coE.randomLower) + coE.randomLower) / 100

        for (let i = 0; i < this.types.length; i++) {
            stab *= (this.move.type === this.types[i]) ? coE.sameTypeBonus : 1;
        }

        for (let i = 0; i < target.types.length; i++) {
            typeE *= gameSettings.typeMatchUp[this.move.type][target.types[i]]
        }

        m = random * stab * typeE

        damageNum = Math.round(coE.overall * p * a / d * m + coE.constant) 

        return damageNum

    } 

    takeDamage(damageNum) {
        this.currHP = (damageNum >= this.currHP)? 0 : this.currHP - damageNum 
    }

    isFainted() {
        return this.currHP === 0
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

/* Define helper variables for initializing Pokemons and Players */

let getTypeMatchById = []; // list of all the API Calls to get the type match up table 
let getPokemonById, getMoveByUrl, newPokemonList;
let gameState;

/* Main Functions for Initializing */

const initConfigs = function() {

    getPokemonById = []; // list of all the API Calls to get Pokemon details (* 6 times)
    getMoveByUrl = []; // API call to get Move details (1 per Pokemon)
    newPokemonList = []; // store all the generated Pokemons

    gameState = {
        pairs: null,
        winner: null,
        gameWinner: null,
    }

}

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

        let randomID;

        const getRandomId = function() {
            randomID = Math.floor(Math.random() * gameSettings.pokeDex) + 1 // randomly generate an ID 
            if (randomID === 132) {
                getRandomId()
            }
        }

        getRandomId()

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
        
        getMoveByUrl.push( 
            $.ajax({ url: moveUrl }).then(
                (data) => {
                    moveDetails.power = data.power
                    moveDetails.type = data.type.name
                    moveDetails.name = data.name

                    if (moveDetails.power !== null) {
                        Pokemon.move = moveDetails 
                        renderPokemonMoves()
                    } else {
                        initMove(Pokemon)                        
                    }
                },
                (error) => {
                    console.log('bad request: ',error);
                }
            )
        
        )
    }
    
/* Main Functions for Rendering */

const renderPlayers = function() {
    $('.player-title').text(`${gameSettings.playerNames[0]}`)
    $('.opponent-title').text(`${gameSettings.playerNames[1]}`)
}

const renderLgPokemons = function() {

    let targetList = ['player', 'opponent']
    let target, pokemon, pokeId, targetCard, btn

    for (let i = 0; i < 6; i++) {
        
        if (i < 3) {
            target = targetList[0]
            cardIdx = i
            btn = {
                class: 'btn-outline-primary',
                text: 'ATTACK!'
            }
            
        } else {
            target = targetList[1]
            cardIdx = i - 3
            btn = {
                class: 'btn-danger',
                text: 'ATTACKING'
            }
        }
        
        targetCard = $(`#${target}-${cardIdx}-lg`)
        pokemon = newPokemonList[i]
        pokeId = pokemon.id

        targetCard.removeClass('fainted')
        
        targetCard.find('img').attr('src',`images/${imageLookup[pokeId-1]}`)
        targetCard.find('img').attr('data-original-title',`Attack: ${pokemon.attack}<br>Defense: ${pokemon.defense}`)

        targetCard.find('.card-title').text(pokemon.name)

        targetCard.find('.progress-text').text(`${pokemon.currHP} / ${pokemon.hp} HP`)
        targetCard.find('.progress-bar').css('width', '100%')
        targetCard.find('.progress-bar').attr('aria-valuenow', '100')

        targetCard.find('.types-row').empty()
        if (pokemon.types.length === 1) {
            targetCard.find('.types-row').addClass('d-flex justify-content-center')
            targetCard.find('.types-row').append(
                `<div class="col-4">
                    <div style="background-color: var(--${pokemon.types[0]})" class="badge badge-pill">${pokemon.types[0]}</div></div>`)
        } else if (pokemon.types.length === 2) {
            targetCard.find('.types-row').removeClass('d-flex justify-content-center')
            targetCard.find('.types-row').append(
                `<div class="col-4 offset-2">
                    <div style="background-color: var(--${pokemon.types[0]})" class="badge badge-pill">${pokemon.types[0]}</div></div>
                <div class="col-4">
                    <div style="background-color: var(--${pokemon.types[1]})" class="badge badge-pill">${pokemon.types[1]}</div></div>`)
        }

        targetCard.find('.btn').removeClass('btn-secondary')
        targetCard.find('.btn').addClass(`${btn.class}`)
        targetCard.find('.btn').text(`${btn.text}`)

        if (cardIdx === 0) {
            targetCard.removeClass('d-none')
        } else {
            targetCard.addClass('d-none')
        }

    }
}

const renderPokemonMoves = function() {

    for (let i = 0; i < 6; i++) {
        let pokemon = newPokemonList[i];
        let targetCard;
        if (i < 3) {
            targetCard = $(`#player-${i}-lg`)
        } else if (i >=3) {
            targetCard = $(`#opponent-${i-3}-lg`)
        }
        targetCard.find('.move-type').text(`${pokemon.move.type}`)
        targetCard.find('.move-type').css('background-color', `var(--${pokemon.move.type})`)
        targetCard.find('.move-name').text(`${pokemon.move.name}`)
        targetCard.find('.move-power').text(`${pokemon.move.power}`)
    }
}

const renderSmPokemons = function() {
    let pokeIdx = [1, 2, 4, 5]
    
    for (let i = 0; i < 4; i++) {
        let pokemon = newPokemonList[pokeIdx[i]]
            $('.small-card').eq(i).find('img').attr('src', `images/${imageLookup[pokemon.id-1]}`)
            $('.small-card').eq(i).find('img').attr('data-original-title',`Type: ${pokemon.types.join(', ')}<br>Attack: ${pokemon.attack}<br>Defense: ${pokemon.defense}`)
            $('.small-card').eq(i).find('.card-title-small').text(pokemon.name)
            $('.small-card').eq(i).find('.progress-bar').css('width', '100%')
            $('.small-card').eq(i).find('.progress-bar').attr('aria-valuenow', '100')
            $('.small-card').eq(i).removeClass('fainted')
            if (i <= 1) {
                $('.small-card').eq(i).attr('id', `player-${pokeIdx[i]}-sm`)    
            } else if (i >= 2) {
                $('.small-card').eq(i).attr('id', `opponent-${pokeIdx[i]-3}-sm`)
            }
    }
}

const renderHP = function(pokemonIdx) {

    // 0-2 is player, 3-5 is opponent

    pokemon = newPokemonList[pokemonIdx]

    let progressBarWidth = Math.round((pokemon.currHP / pokemon.hp) * 100)

    if (pokemonIdx >= 0 && pokemonIdx < 3) {
        $(`#player-${pokemonIdx}-lg`).find('.progress-bar').css('width', `${progressBarWidth}%`)
        $(`#player-${pokemonIdx}-lg`).find('.progress-bar').attr('aria-valuenow', `${progressBarWidth}`)
        $(`#player-${pokemonIdx}-lg`).find('.progress-text').text(`${pokemon.currHP} / ${pokemon.hp} HP`)
    } else if (pokemonIdx >= 3 && pokemonIdx < 6) {
        $(`#opponent-${pokemonIdx-3}-lg`).find('.progress-bar').css('width', `${progressBarWidth}%`)
        $(`#opponent-${pokemonIdx-3}-lg`).find('.progress-bar').attr('aria-valuenow', `${progressBarWidth}`)
        $(`#opponent-${pokemonIdx-3}-lg`).find('.progress-text').text(`${pokemon.currHP} / ${pokemon.hp} HP`)
    }
}

const swapPokemons = function(targetCardSm) { //input is a jQuery object

    // Find the small card that was clicked, find the large card currently on display 
    cardSm = targetCardSm.closest('.small-card') 
    cardLg = cardSm.parent().children('.card').not('.small-card').not('.d-none')

    cardSmId = cardSm.attr('id')
    oldCardLgId = cardLg.attr('id')
    newCardLgId = cardSmId.slice(0,cardSmId.length-2) + 'lg'

    // Update the small card contents

    const getTypeText = function(card) {
        let types = [];
        typesArr = card.find('.types-row').find('.badge') 
        for (let i = 0; i < typesArr.length; i++) {
            types.push(typesArr.eq(i).text())
        } 
        return types.join(', ')
    }
    newValues = {
        imgSrc: cardLg.find('img').attr('src'),
        title: cardLg.find('.card-title').text(),
        barWidth: cardLg.find('.progress-bar').attr('aria-valuenow') + '%',
        id: oldCardLgId.slice(0, oldCardLgId.length-2) + 'sm',
        fainted: cardLg.hasClass('fainted'),
        toolTipAD: cardLg.find('img').attr('data-original-title'),
        toolTipTypes: getTypeText(cardLg),
    }

    cardSm.find('img').attr('src', newValues.imgSrc)
    cardSm.find('img').attr('data-original-title', `Type: ${newValues.toolTipTypes}<br>${newValues.toolTipAD}`)

    cardSm.find('.card-title-small').text(newValues.title)
    cardSm.find('.progress-bar').css('width', newValues.barWidth)

    if (newValues.fainted) {
        cardSm.addClass('fainted')
    } else {
        cardSm.removeClass('fainted')
    }

    // Update the large card display to d-none

    cardLg.addClass('d-none')
    $(`#${newCardLgId}`).removeClass('d-none')

    cardSm.attr('id', newValues.id)

}

/* Main Functions for Battle Rounds */

const returnBattlePairs = function() {

    let pairs = [];

    playerId = $('.card').not('.small-card').not('.d-none').eq(0).attr('id')
    playerId = parseInt(playerId[playerId.length - 4])

    oppoId = $('.card').not('.small-card').not('.d-none').eq(1).attr('id')
    oppoId = parseInt(oppoId[oppoId.length - 4]) + 3

    pairs = [playerId, oppoId]

    return pairs // idx of newPokemonList
}

const attackRound = function (a, d) {
    attackPokemon = newPokemonList[a]
    defensePokemon = newPokemonList[d]
    if (gameState.winner || gameState.gameWinner) {
        return
    } else {
        damage = attackPokemon.dealDamage(defensePokemon)
        defensePokemon.takeDamage(damage)
        renderHP(d)
        renderAttkMsg(a,d,damage)

        if (defensePokemon.isFainted()) {

            gameState.winner = attackPokemon
            renderWinMsg(a)
            renderFainted(d)
            ckGameWinner()
            if (gameState.gameWinner) {
                renderGameOver()
                renderNewOrQuitGame()
                addNewOrQuitListener()
            } else {
                renderNextRound()
            }
        }
    }
}

const renderAttkMsg = function(a, d, dmg) {

    attackPokemon = newPokemonList[a]
    defensePokemon = newPokemonList[d]
    msgClasses = {};

    if (a < d) {
        msgClasses = {
            side: 'player',
            alertType: 'primary',
        }
    } else {
        msgClasses = {
            side: 'opponent',
            alertType: 'danger'
        }
    }

    $('#battle-messages').append(
        `<div class="row ${msgClasses.side}-message">
            <div class="col-auto alert-banner alert-${msgClasses.alertType}">
            <span class="attkMsg">${attackPokemon.name}</span> used <span class="attkMsg">${attackPokemon.move.name}</span> on <span class="attkMsg">${defensePokemon.name}</span> and dealt ${dmg} damage!
            </div>
        </div>`)

     $('#battle-messages').scrollTop($('#battle-messages').height())

}

const renderWinMsg = function(a) {

    attackPokemon = newPokemonList[a]

    msgClasses = {
        player: 'alert-primary',
        opponent: 'alert-danger',
    };

    if (a < 3) { // a is player's pokemon
        alertClass = msgClasses.player
    } else {
        alertClass = msgClasses.opponent
    }

    $('#battle-messages').append(
        `<div class="row win-message">
            <div class="col-auto alert-banner ${alertClass}">
            <span class="attkMsg">${attackPokemon.name}</span> won!
            </div>
        </div>`
    )

    $('#battle-messages').scrollTop($('#battle-messages').height())

}

const renderFainted = function(pokeIdx) { //input = a or d, which is the pokeidx 
    
    if (pokeIdx >= 3) {
        cardId = `opponent-${pokeIdx-3}-lg`
        $(`#${cardId}`).find('.btn').removeClass('btn-danger')
    } else {
        cardId = `player-${pokeIdx}-lg`
        $(`#${cardId}`).find('.btn').removeClass('btn-outline-primary')
    }

    $(`#${cardId}`).addClass('fainted')
    $(`#${cardId}`).find('.btn').text('FAINTED')
    $(`#${cardId}`).find('.btn').addClass('btn-secondary')
}

const renderNextRound = function() {
    $('#battle-messages').append(`
        <div class="row">
            <div class="col-4 offset-4">
                <button class="btn btn-outline-success">NEXT ROUND</button>
            </div>
        </div>`)

    $('#battle-messages').scrollTop($('#battle-messages').height())
    
    $('#battle-messages').find('.btn').on('click', event => {
        event.preventDefault()
        $('#battle-messages').empty()
        gameState.winner = null;

        playerLgCard = $('.player-card').not('.small-card').not('.d-none')

        if (playerLgCard.hasClass('fainted')) {

            playerSmCard = $('.player-card.small-card').not('.fainted').eq(0)
            swapPokemons(playerSmCard)
        }

        oppoLgCard = $('.opponent-card').not('.small-card').not('.d-none')

        if (oppoLgCard.hasClass('fainted')) {

            oppoSmCard = $('.opponent-card.small-card').not('.fainted').eq(0)
            swapPokemons(oppoSmCard)
        }

    })

}

const ckGameWinner = function() {
    if ($('.player-card.fainted').length === 5) {
        gameState.gameWinner = 'opponent'
    } else if ($('.opponent-card.fainted').length === 5) {
        gameState.gameWinner = 'player'
    }
}

const renderGameOver = function() {
    
    msgClasses = {
        player: {
            alert: 'alert-primary',
            name: 'You',
        },
        opponent: {
            alert: 'alert-danger',
            name: gameSettings.playerNames[1],
        }
    }

    $('#battle-messages').append(
        `<div class="row win-message">
            <div class="col-auto alert-banner ${msgClasses[gameState.gameWinner].alert}">
            ${msgClasses[gameState.gameWinner].name} won!
            </div>
            </div>`
    )

    $('#battle-messages').scrollTop($('#battle-messages').height())
}

const renderNewOrQuitGame = function() {

        $('#battle-messages').append(`
            <div class="row">
                <div class="col-4 offset-2">
                <button class="btn btn-outline-primary new-game-btn">NEW GAME</button>
                </div>
                <div class="col-4">
                <button class="btn btn-outline-warning quit-game-btn">QUIT GAME</button>
                </div>
            </div>`)
        
        $('#battle-messages').scrollTop($('#battle-messages').height())
} 

const addNewOrQuitListener = function() {

    const defaultActions = function(event) {
        event.preventDefault()
        $('#battle-messages').empty()
        disableEvtListeners()
    }

    $('.new-game-btn').on('click', event => { // if clicking the New Game option
        defaultActions(event)
        initGame()
        addSwapEvtListener()
    })

    $('.quit-game-btn').on('click', event => { // if clicking Quit Game option
        defaultActions(event)
        $('#index-page').removeClass('d-none')
        $('#battle-page').addClass('d-none')
        addStartListener()
    })

}

/* Main Game Page Functions */

const initGame = function() {

    initConfigs()
    
    $.when.apply($, getTypeMatchById).done(function() { // after the type matchup table is filled
        
        initPokemon() // initalize Pokemons (with all details including move assignment)
        
        $.when.apply($, getPokemonById).done(function() { // after Pokemon initialization
    
            for (let i = 0; i < newPokemonList.length; i++) {
                initMove(newPokemonList[i])
            }
    
            $.when.apply($, getMoveByUrl).done(function() {
                
                $('#index-page').addClass('d-none')
                $('#battle-page').removeClass('d-none')
    
                renderPlayers()
                renderLgPokemons()
                renderSmPokemons()
                
            })
            
        })
        
    })
}

const addAttkEvtListener = function() {
                    
    $('.attack-btn').on('click', (event) => {
        event.preventDefault()
        if ($(event.target).hasClass('btn-outline-primary')) {
            gameState.pairs = returnBattlePairs()
            attackRound(gameState.pairs[0], gameState.pairs[1])
            attackRound(gameState.pairs[1], gameState.pairs[0])
        }
    })
    
}

const addSwapEvtListener = function() {

    $('.small-card.player-card').on('click', (event) => {
        event.preventDefault()
        swapPokemons($(event.target))
    })
}

const addStartListener = function() {
    
    $('#start').on('click', event => {
        
        event.preventDefault()
        
        if ($('input').val() !== '') {
            gameSettings.playerNames[0] = $('input').val()
        }
        
        initTypeMatch() // fill the gameSettings with type matchup table
        initGame()
        addSwapEvtListener()
        addNewOrQuitListener()
        
    })
}

const disableEvtListeners = function() {
    $('.player-card.btn').off('click')
    $('.player-card.small-card').off('click')
    $('#start').off('click')
    // $('#quit').off('click')
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

addStartListener()
addAttkEvtListener()


