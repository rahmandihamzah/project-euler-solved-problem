let result;
let count = 20;
let arrCont = [];

let i = 1;
let status = true;
while (status) {
    for (let j = 1; j <= count; j++) {
        if (Math.ceil(i / j) === i / j) {
            arrCont.push(j);
        } else {
            break;
        }
    }

    if (arrCont.length === count) {
        result = i;
        status = false;
    } else {
        i++;
        arrCont = [];
    }
}

console.log(arrCont);
console.log(result);