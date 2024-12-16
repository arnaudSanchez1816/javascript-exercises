const removeFromArray = function(array, ...toRemove) {
    let resultArray = [];
    for(let i = 0; i < array.length; ++i) {
        if(toRemove.find(element => array[i] === element) === undefined) {
            resultArray.push(array[i]);
        }
    }

    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
