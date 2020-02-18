const caesar = function(string,shift) {
    const alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetCaps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let codedString = '';
    let inputString = Array.from(string);

    // save capital letter indexes
    const capitalLetters = inputString.map(letter => alphabetCaps.includes(letter) ? 1 : 0);   

    indexes = inputString.map(function (letter) {
        if (alphabetLower.includes(letter) || alphabetCaps.includes(letter)) {
        return alphabetLower.indexOf(letter.toLowerCase()) - shift
        } else return letter;
    })
    console.log(indexes);

    for (let i=0; i<capitalLetters.length; i++) {
        if (!isNaN(indexes[i]) && (indexes[i] !== " ")) {
        capitalLetters[i] === 1
        ? codedString += alphabetCaps[indexes[i]]
        : codedString += alphabetLower[indexes[i]];
        } else codedString += indexes[i];
    }
    
    console.log(codedString);
}

module.exports = caesar
