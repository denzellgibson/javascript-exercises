const palindromes = function (string) {
    let noPunctString = "";
    const PUNCTUATIONS = "/[\.,?!]/g ";

    for (let i = 0; i <= string.length - 1; i++) {
        if (!PUNCTUATIONS.includes(string.charAt(i))) {
            noPunctString += string.charAt(i);
        }
    }

    let lowercaseString = noPunctString.toLowerCase();

    for (let i = 0; i <= noPunctString.length - 1; i++) {
        if (lowercaseString.charAt(i) != lowercaseString.charAt(lowercaseString.length - (1 + i))){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
