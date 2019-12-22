let input = 600851475143;
let temp = input;
let arrPrime = [];

let i = 1;
let status = true;
while (status) {
    console.log(i)
    if (temp / i !== temp) {
        if (Math.ceil(temp / i) === temp / i) {
            if (temp / i === 1) {
                arrPrime.push(i);
                status = false;
            } else {
                console.log('yes')
                temp = temp / i;
                arrPrime.push(i);
            }
        } else {
            i++;
        }
    } else {
        i++;
    }
}

console.log(arrPrime);