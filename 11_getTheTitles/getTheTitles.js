const getTheTitles = function(booksArr) {
    let titleArr = [];

    booksArr.map(book => {
        titleArr.push(book.title);
    });

    return titleArr;
};

// Do not edit below this line
module.exports = getTheTitles;
