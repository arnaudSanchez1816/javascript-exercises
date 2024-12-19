const palindromes = function (str) {
    const strFiltered = [...str.toLowerCase()]
    .filter(x => (x >= "A" && x <= "z") || (x >= "0" && x <= "9"));
    const reverse = strFiltered.slice().reverse().join("")

    return strFiltered.join("") === reverse;
};

// Do not edit below this line
module.exports = palindromes;
