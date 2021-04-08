

const add = (x, y) => {
    if(!isANumber(x)) return addStrings(x, y);
    return parseFloat(x) + parseFloat(y);
};

const addStrings = (x, y) => {
    return x + " " + y;
};

const subtract = (x, y) => {
    if(!isANumber) return "Can't subtract strings";
    return parseFloat(x) - parseFloat(y);
};

const isANumber = (x) => {
    return parseInt(x) !== NaN;
};