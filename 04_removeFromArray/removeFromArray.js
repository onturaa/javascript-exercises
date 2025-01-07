const removeFromArray = function(array, value, ...otherArgs) {
    let toRemove = [value, ...otherArgs];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < toRemove.length; j++) {
            if (array[i] === toRemove[j]) {
                array.splice(i, 1);
                i--;
            }
        }
    }
    
    return array;
    
};

// Do not edit below this line
module.exports = removeFromArray;
