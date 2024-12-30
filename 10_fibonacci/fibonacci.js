const fibonacci = function(number) {
    
    if (number == 1) {
        return 1;
    }
    else if (number == 0) {
        return 0;
    }
    else if (number < 0 ) {
        return 'OOPS';
    }
    
    let firstNum = 0, secondNum = 0;
    let sum = 1;

    for (let i = 2; i <= number; i++) {
        secondNum = firstNum;
        firstNum = sum;
        sum = firstNum + secondNum;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
