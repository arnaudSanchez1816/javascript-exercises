const sumAll = function(nb1, nb2) {
    const ERROR_RESULT = "ERROR";
    if(Number.isInteger(nb1) === false || Number.isInteger(nb2) === false) {
        return ERROR_RESULT;
    }

    if(nb1 < 0 || nb2 < 0) {
        return ERROR_RESULT;
    }

    let min = Math.min(nb1, nb2);
    let max = Math.max(nb1, nb2);

    let result = 0;
    for(let i = min; i <= max; ++i) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
