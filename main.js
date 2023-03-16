/* const num = 1;
console.log(num); */

function factorial(number) {
  for (let i = number; i >= 0; i--) {
    if (typeof i !== "number") {
      console.log("Write a number....or else, yark-o!");
    } else if (number == 0) {
      return 1;
    } else if (number < 0) {
      return NaN;
    } else if (typeof number == Number) {
      return NaN;
    } else {
      return number * factorial(number - 1);
    }
  }
}

console.log(factorial(0));
console.log(factorial(4));
console.log(factorial(10));
console.log(factorial("potato"));
console.log(factorial(-2));
