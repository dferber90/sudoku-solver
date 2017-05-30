const { difference } = require('lodash');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const getLeftovers = difference.bind(null, numbers);
module.exports = getLeftovers;
