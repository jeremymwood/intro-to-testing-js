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

function isVowel(input) {
     if(input === `a` || input === `A` || input === `e` ||input ===  `E` || input === `i` || input === `I` || input === `o` || input === `O` || input === `u` || input === `U`) {
         return true;
     } else {
         return false
     }
}

// let isVowel = function(letter) {
//
//     var vowels = ["a", "e", "i", "o", "u"];
//
//     for(var i in vowels){
//
//         if(letter === i){
//             return true;
//         } else {
//             return false;
//         }
//     }
//
// };

console.log(isVowel(`a`));