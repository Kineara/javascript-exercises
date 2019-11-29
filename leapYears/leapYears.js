const leapYears = function(num) {
    let year = num;

    if((year%4 == 0) && ((year%100 == 0) ? (year%400 == 0 ? true : false) : true)) {
        return true;
    } else {
        return false;
    }
}

module.exports = leapYears
