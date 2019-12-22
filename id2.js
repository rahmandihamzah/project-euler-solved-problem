//inisiasi 2 variable berisi array (array1 untuk penyimpan sementara, array2 untuk penyimpanan hasil penjumlahan)
//inisiasi variable untuk
//looping start
//push setiap value ke array1
//looping untuk push ke array sementara
//looping untuk memasukkan value ke 2 ke dalam array1
//jika panjang array = 1, sum all value of array
//hasil sum array masukkan ke array2
//clear arr1
//ganti value array1 dgn value selanjutnya
//looping end
//sum all value of array2

//f(n) = f(n-1) + f(n-2)


let sumResult = 0;
let arrFibonacci = [];

let status = true;
while (status) {
    if (arrFibonacci.length === 0) {
        arrFibonacci.push(1);
        arrFibonacci.push(1 + 1);
    } else {
        arrFibonacci.push(arrFibonacci[arrFibonacci.length - 1] + arrFibonacci[arrFibonacci.length - 2]);
    }

    if (arrFibonacci[arrFibonacci.length - 1] + arrFibonacci[arrFibonacci.length - 2] >= 4000000) {
        status = false;
    }
}

for (let i = 0; i < arrFibonacci.length; i++) {
    if (arrFibonacci[i] % 2 === 0) {
        sumResult += arrFibonacci[i];
    }
}

console.log(arrFibonacci);
console.log(sumResult);