const repeatString = function(string, number) {
    let newstring = '';

    if (number < 0) {
        return 'ERROR';
    }
    else {
        for (let i = 0; i < number; i++) {
            newstring = newstring + string; 
        }
    }
    return newstring;
};

// Do not edit below this line
module.exports = repeatString;
