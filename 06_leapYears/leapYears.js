const leapYears = function(year) {
    if(isNaN(year)){
        return "ERROR";
    }

    if(year % 4 !== 0) {
        return false;
    }

    if(year % 100 === 0 && (year % 400 === 0) === false) {
        return false;
    }

    return true; 
};

// Do not edit below this line
module.exports = leapYears;
