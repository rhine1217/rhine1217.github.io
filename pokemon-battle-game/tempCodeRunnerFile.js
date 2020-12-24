
let i = 0
let str = 'abc'

const testFunc = function() {

    if (i === 5) {
        clearInterval(test)
    } else {
        console.log(`${str}`)
        i++
    }
}


const test = setInterval (testFunc, 1000)