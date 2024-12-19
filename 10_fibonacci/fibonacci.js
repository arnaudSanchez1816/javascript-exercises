const fibonacci = function(number) {
    if(number < 0) {
        return "OOPS";
    }

    if(+number === 0) {
        return 0;
    }

    if(+number === 1) {
        return 1;
    }

    let first = 1;
    let second = 0;
    for(let i = 2; i <= number; ++i) {
        let value = first + second;
        second = first;
        first = value;
    }

    return first;
};

// Do not edit below this line
module.exports = fibonacci;
