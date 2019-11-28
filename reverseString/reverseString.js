const reverseString = function(string) {
    let userString = string;
    let splitString = userString.split("");
    let reversedString = [];

    for(let i = 0; i < userString.length; i++) {
        let letter = splitString.pop();
        reversedString.push(letter);
    }

    return reversedString.join("");
}

module.exports = reverseString
