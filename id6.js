let result1 = 0;
let result2 = 0;
let result;

for (let i = 1; i <= 100; i++) {
    result1 += i * i;
}

for (let i = 1; i <= 100; i++) {
    result2 += i;
}

result2 *= result2;

result = result2 - result1;

console.log(result1);
console.log(result2);
console.log(result);