const sumAll = function(firstNum, secondNum) {
    let sum = 0;
    let minNum, maxNum;

    if (typeof firstNum != 'number' || typeof secondNum != 'number') {
        return 'ERROR';
    }
    else if (firstNum < 0 || secondNum < 0) {
        return 'ERROR';
    }

    if (firstNum < secondNum) {
        minNum = firstNum;
        maxNum = secondNum;
    } 
    else {
        minNum = secondNum;
        maxNum = firstNum;
    }

    for (let i = minNum; i <= maxNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
