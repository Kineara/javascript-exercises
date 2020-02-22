const caesar = function(string,shift) {
    const alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetCaps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let codedString = '';
    let inputString = Array.from(string);

    const capitalLetters = inputString.map(letter => alphabetCaps.includes(letter) ? 1 : 0);   

    indexes = inputString.map(function (letter) {
        if (alphabetLower.includes(letter) || alphabetCaps.includes(letter)) {
            indexTest = alphabetLower.indexOf(letter.toLowerCase()) + shift;
            while(indexTest < 0 || indexTest > 25) {
                if(indexTest < 0) indexTest = indexTest + 26;
                else indexTest = indexTest % 26;
            }
            return indexTest;
        } else return letter;
    })

    for (let i=0; i<capitalLetters.length; i++) {
        if (typeof indexes[i] === "number") {
            capitalLetters[i] === 1
            ? codedString += alphabetCaps[indexes[i]]
            : codedString += alphabetLower[indexes[i]];
        } else codedString += indexes[i];
    }
       
    return codedString;
}

module.exports = caesar
