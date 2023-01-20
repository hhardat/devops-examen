// TODO: Add here the function to validate
const isValid = (label) => !isEmpty(label)
const isEmpty = (label) => !label || label.length === 0;

exports.isEmpty = isEmpty;
exports.isValid = isValid;
