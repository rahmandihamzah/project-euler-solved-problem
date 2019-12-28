let limit = 500;
let tempArr = [];
let tempList = 0;


let i = 1;
let status = true;
while (status) {
    if (tempArr.length <= limit) {
        tempArr = [];
        for (let j = 0; j <= i; j++) {
            tempList += j;
        }

        for (let k = 1; k <= tempList; k++) {
            if (Math.ceil(tempList / k) === tempList / k) {
                tempArr.push(k);
            }
        }

        i++;
        console.log(tempList);
        console.log(tempArr);
        tempList = 0;
    } else {
        status = false;
    }

}
