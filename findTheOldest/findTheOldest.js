let findTheOldest = function(people) {
    
    function zombieCheck(deathYear) {
        return !deathYear ? new Date().getFullYear() : deathYear;
    }
    
    const oldest = people.sort((a,b) => ((zombieCheck(a.yearOfDeath) - a.yearOfBirth) < (zombieCheck(b.yearOfDeath) - b.yearOfBirth)) ? 1 : -1);

    return oldest[0];
}

module.exports = findTheOldest
