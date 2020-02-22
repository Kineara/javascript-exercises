const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    
    let sequence = [1];
    let startNum = 0;
    let nextNum = 1;
    
    for (let i=0; i<(num-1); i++) {
        sum = startNum + nextNum;
        sequence.push(sum);
        startNum = nextNum;
        nextNum = sum;
    }
    console.log(sequence);
    return sequence[(num-1)];
}

module.exports = fibonacci
