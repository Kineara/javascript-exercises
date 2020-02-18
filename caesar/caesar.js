const caesar = function(string,shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let codedString = '';
    inputString = Array.from(string);
    // Get alphabetical index of each letter in the inputString array
    // Subtract the shift factor
    // Use new index to get new letter from alphabet
    // Concatenate letter to codedString
    indexes = inputString.map(function (letter) {
        codedString += alphabet[alphabet.indexOf(letter) - shift];
    })
    console.log(codedString);
}   

module.exports = caesar
