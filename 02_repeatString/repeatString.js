const repeatString = function(string, number) {
    if (number < 0) {return 'ERROR';}
    let outputString = '';
    for (let i = 1; i <= number; i++) {
        outputString = outputString + string;
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
