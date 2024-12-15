const repeatString = function(stringToRepeat, repetitionCount) {
    if(repetitionCount === undefined || repetitionCount < 0) {
        return "ERROR";
    }

    let result = "";
    for (let i = 0; i < repetitionCount; i++) {
        result += stringToRepeat;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
