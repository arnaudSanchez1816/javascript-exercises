const findTheOldest = function(arr) {
    return arr.reduce((result, person) => {
        if(getPeopleAge(result) < getPeopleAge(person)) {
            result = person;
        }
        return result;
    });
};

function getPeopleAge(people) {
    const birthDate = people.yearOfBirth;
    const year = people.yearOfDeath || new Date().getFullYear();
    return year - birthDate;
}

// Do not edit below this line
module.exports = findTheOldest;
