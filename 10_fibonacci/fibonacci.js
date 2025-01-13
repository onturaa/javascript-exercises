const fibonacci = function(number) {
    let array = [1, 1];
    let originalArr = [...array];
    let num1 = 0;
    let num2 = 0;

    number = parseInt(number);

    if (number === 0) {
        return 0;
    } else if (number < 0) {
        return 'OOPS';
    }

    for (let i = 0; i < number - 2; i++) {
        num2 = array.pop();
        num1 = array.pop();
        array.push(num2, num1 + num2);
        originalArr.push(num1 + num2);
    }

    return originalArr.pop();
};

// Do not edit below this line
module.exports = fibonacci;
