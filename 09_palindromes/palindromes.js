const palindromes = function (string) {

    let array = string.split('');

    let newStr = '';
    array.forEach(elem => {
        if (elem !== '!' && elem !== '.' && elem !== ',' && elem !== ':' && elem !== ';') {
            newStr = newStr + elem;
        }
    });

    newStr = newStr.split(' ').join('');

    let left = (newStr.slice(0, newStr.length / 2)).toLowerCase();
    let right = '';

    if (newStr.length % 2 === 0) {
        right = (newStr.slice(newStr.length / 2)).toLowerCase();
    }
    else
    {
        right = (newStr.slice((newStr.length / 2) + 1)).toLowerCase();
    }

    right = right.split('').reverse().join('');

    return (left === right) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
