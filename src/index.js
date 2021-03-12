module.exports = function reverse (n) {
    n = String(n).split('').reverse().join('');
    return parseInt(n);
}
