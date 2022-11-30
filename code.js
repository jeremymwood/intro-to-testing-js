// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(name) {
    if(typeof name === `boolean`) {
        return `Hello, World!`
    } else {
        return `Hello, ` + name + `!`;
    }
}

function isFive(input) {
    return input == `5`
}

function isEven(input) {
    return (input % 2 === 0) && (typeof input !== `boolean`)
}

