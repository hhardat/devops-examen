// TODO: Add here the function to validate
const isValid = (label) => isEight(label) && containsSpecialChar(label) && containsNumber(label)
const containsNumber = (label) => label.match(/[0-9]/) ? true : false
const containsSpecialChar = (label) => label.match(/[^A-Za-z0-9]/) ? true: false
const isEight = (label) => label.length >= 8
const isEmpty = (label) => !label || label.length === 0;

exports.isEmpty = isEmpty;
exports.isValid = isValid;
