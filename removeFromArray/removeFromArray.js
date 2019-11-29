const removeFromArray = function(array, ...userArgs) {
    let userArray = array;
    let removeValues = userArgs;

    for(let i = 0; i < removeValues.length; i++) {
        for(let x = 0; x < userArray.length; x++) {
            if(userArray[x] === removeValues[i]) {
                userArray.splice(x, 1);
            }
        }
    }

    return userArray;

}

module.exports = removeFromArray
