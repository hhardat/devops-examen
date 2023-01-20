// TODO: Add here the function to validate
const isValid = (label) => isEight(label)
const isEight = (label) => label.length >= 8
const isEmpty = (label) => !label || label.length === 0;

exports.isEmpty = isEmpty;
exports.isValid = isValid;
