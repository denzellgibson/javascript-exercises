const removeFromArray = function(inputArray, toBeRemoved) {
    let outputArray = [];
    let argsArray = Array.prototype.slice.call(arguments);
    argsArray = argsArray.slice(1);

    inputArray.forEach(element => {
        if (argsArray.includes(element) == false) {
            outputArray[outputArray.length] = element;
        }
    });
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
