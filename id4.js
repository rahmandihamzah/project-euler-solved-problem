let result;
let temp;
let isPal = '';

let i = 100;
let status = true;
while (status) {
    if (i.toString().length < 4) {
        let j = 100;
        let status1 = true
        while (status1) {
            if (j.toString().length < 4) {
                temp = i * j;
                isPal = '';
                for (let i = temp.toString().length - 1; i >= 0; i--) {
                    isPal += temp.toString()[i];
                }
                if (isPal.toString() === temp.toString()) {
                    result = `${i} X ${j} == ${temp}`;
                }
                console.log(temp);
            } else {
                status1 = false;
            }
            j++;
        }
    } else {
        status = false;
    }
    i++;
}

console.log(result);