let arrResult = [];
let limit = 10001;
let result;

let i = 1;
let status = true;
while (status) {
    let arrIsPrime = [];
    for (let j = 1; j <= i; j++) {
        if (Math.ceil(i / j) === i / j) {
            arrIsPrime.push(j);
        }
    }

    if (arrIsPrime.length === 2) {
        arrResult.push(i);
    }

    if (arrResult.length === limit) {
        result = arrResult[arrResult.length - 1];
        status = false;
    } else {
        i++;
    }
}

console.log(arrResult);
console.log(result);