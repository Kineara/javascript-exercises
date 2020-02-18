const palindromes = function(inputString) {
    let splitString = inputString.toLowerCase()
                        .split('')
                        .filter(letter => "abcdefghijklmnopqrstuvwxyz".includes(letter));
    let origString = splitString.join("");
    let testString = splitString.reverse().join("");
    return origString === testString;
    }

module.exports = palindromes
