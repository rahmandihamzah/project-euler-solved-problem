let result = 0;
let arrTemp = [];

console.time('concatenation');

for (let i = 1; i < 2e6; i++) {
    arrTemp = [];
    for (let j = 1; j <= i; j++) {
        if (Math.ceil(i / j) === i / j) {
            arrTemp.push(j);
        }
    }
    if (arrTemp.length === 2) {
        result += i;
    }
}
console.log(result);

console.timeEnd('concatenation');