/* const num = 1;
console.log(num); */

const theMaw = document.getElementById('maw');
const subBut = document.getElementById('subBut');
const boxOut = document.getElementById('factResult');
const recWord = document.getElementById('recWord');

function getValue() {
    let value = Number(theMaw.value);
    console.log(`Your value is ${value}`);
    return value;
}

function factorial(number) {
    if (typeof number !== 'number') {
        console.log(typeof number);
        console.log('Write a number....or else, yark-o!');
    } else if (number == 0) {
        let result = 1;
        return result;
    } else if (number < 0) {
        return NaN;
    } else {
        let result = number * factorial(number - 1);
        return result;
    }
}

function boxPrint(result) {
    boxOut.textContent = result;
}

function solveFact() {
    boxPrint(factorial(getValue()));
}

subBut.addEventListener('click', solveFact);

console.log(factorial(0));
console.log(factorial(4));
console.log(factorial(10));
console.log(factorial('potato'));
console.log(factorial(-2));
console.log('This is a cheap commit, and I know it.');
