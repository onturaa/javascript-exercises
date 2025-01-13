const findTheOldest = function(people) {
    people.map(person => {
        if (typeof person.yearOfDeath === 'undefined') {
            person['age'] = new Date().getFullYear() - person.yearOfBirth;
        }
        else {
            person['age'] = person.yearOfDeath - person.yearOfBirth;
        }
    });

    const oldestArr = people.sort((personA, personB) => personA.age > personB.age ? -1 : 1);

    return oldestArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
