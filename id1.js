
// problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

//1. looping to get all value 0 - 100
//2. check for the value (multiples of 3 or 5 below 1000)
//3. push true value to an array
//4. sum all value in that array
var arr = []

for (var i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {

        // console.log(i);
        // var a = i;
        // var b = a + i;

        arr.push(i)
        console.log(arr.reduce((a, b) => a + b)); //result = 233168
    }
    // console.log(arr);
}