const getTheTitles = function(bookArray) {
    let output = [];
    bookArray.forEach(element => {
        output.push(element.title);
    });
    return output;
};

// Do not edit below this line
module.exports = getTheTitles;
