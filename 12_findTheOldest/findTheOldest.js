const findTheOldest = function(people) {
    let oldestAge = 0;
    let name = '';
    let deathYear;

    people.forEach(element => {
        
        if (element.yearOfDeath === undefined) {
            deathYear = new Date().getFullYear();
        }
        else {
            deathYear = element.yearOfDeath;
        }

        let age = deathYear - element.yearOfBirth;

        if (age > oldestAge) {
            oldestAge = age;
            name = element.name;
        }
    });
    let output = people.find((person) => person.name == name);
    return output;
};

// Do not edit below this line
module.exports = findTheOldest;
