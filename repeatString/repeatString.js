const repeatString = function(string,value) {
    let userString = string;
    let repeatVal = value;
    let repeatedString = "";

    if(repeatVal < 0) {
        return "ERROR";
    }

    for(let i = 0; i < repeatVal; i++) {
        repeatedString += userString;
    }

    return repeatedString;
}

module.exports = repeatString
