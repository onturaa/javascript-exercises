const sumAll = function(start, end) {

    let sum = 0;
    
    if (start < 0 || end < 0 || Number.isInteger(start) === false || Number.isInteger(end) === false) {
        return 'ERROR';
    }
    if (start === end) {
        return start;
    }
    else if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    for (let i = start; i < end + 1; i++) {
        sum = sum + i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
