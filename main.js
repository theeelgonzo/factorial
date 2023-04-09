/* const num = 1;
console.log(num); */

function factorial(number) {
    if (typeof number !== 'number') {
        console.log('Write a number....or else, yark-o!');
    } else if (number == 0) {
        return 1;
    } else if (number < 0) {
        return NaN;
    } else {
        return number * factorial(number - 1);
    }
}

console.log(factorial(0));
console.log(factorial(4));
console.log(factorial(10));
console.log(factorial('potato'));
console.log(factorial(-2));
console.log('This is a cheap commit, and I know it.');
