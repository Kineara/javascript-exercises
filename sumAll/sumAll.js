const sumAll = function(a,b) {
    let firstInt, lastInt;
    if(a<0 || b<0 || typeof a != 'number' || typeof b != 'number') {
        return "ERROR";
    }
    else if(a>b) {
        firstInt = b;
        lastInt = a;
    } else {
        firstInt = a;
        lastInt = b;
    }
    let sum = 0;

    for(let i = firstInt; i <= lastInt; i++) {
        sum += i;
    }

    return sum;

}

module.exports = sumAll
