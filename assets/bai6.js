// 1.Viết hàm tính bình phương một số.
// function square(n){
//     return n*n;
// }
// console.log(square(4));

// 2. Viết hàm tính tổng từ 1 đến n.
// function sum(){
//     let n = parseInt(prompt("Nhập vào n: "));
//     let result = 0;
//     for(let i=0; i<=n; i++){
//         result+=i;
//     }
//     return result;
// }
// console.log(sum());

// 3. Viết hàm kiểm tra số nguyên tố.
// function isPrime(n) {
//     if (n < 2) return false;
//     if (n === 2) return true;
//     for (let i = 2; i < Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         } return true;
//     }

// }
// let n = parseInt(prompt("Nhập vào n: "));
// if (isPrime(n)) {
//     console.log(`${n} là số nguyên tố`);
// } else {
//     console.log(`${n} ko là số nguyên tố!`);
// }

// 4. Viết hàm đảo ngược chuỗi. tách chuỗi xử lí chuỗi ghép lại
// function strReverse(str){
//     let result = str.split("").reverse().join();
//     return result;
// }
// console.log(strReverse("hello"));

//5. Viết hàm trả về số lớn nhất trong mảng.
// function max() {
//     let arr = [];
//     let n = parseInt(prompt("Nhập vào số phần tử của mảng: "));
//     for (let i = 0; i < n; i++) {
//         let a = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
//         arr[i] = a;
//     }

//     let max = arr[0];
//     for (let i = 0; i < n; i++) {
//         if (arr[i] > arr[0]) {
//             max = arr[i];
//         }
//     }
//     console.log("Mảng bạn vừa nhập:", arr);
//     console.log("Giá trị lớn nhất trong mảng là:", max);
//     return max;
// }

// max();

// 7. Viết hàm tính giai thừa bằng đệ quy. đẹ quy là gọi lại chính hàm đó

// function giaiThua(n) {
//     if (n < 0) {
//         return "Không có giai thừa cho số âm!";
//     }
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * giaiThua(n - 1); // Gọi lại chính hàm đó
// }

// let n = parseInt(prompt("Nhập vào số nguyên n: "));
// console.log(`${n}! = ${giaiThua(n)}`);

// 8. Viết hàm kiểm tra năm nhuận

// function isLeapYear(year) {
//     if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let year = parseInt(prompt("Nhập vào năm: "));
// if (isLeapYear(year)) {
//     console.log(`${year} là năm nhuận`);
// } else {
//     console.log(`${year} không phải là năm nhuận`);
// }

// 9. 

// 10. Viết hàm tính tổng các phần tử lẻ trong mảng.

function tongLe(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
        }
    }
    return sum;
}

let n = parseInt(prompt("Nhập số phần tử của mảng: "));
let arr = [];

for (let i = 0; i < n; i++) {
    arr[i] = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
}

console.log("Mảng bạn vừa nhập:", arr);
console.log("Tổng các phần tử lẻ là:", tongLe(arr));

