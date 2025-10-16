// 1. Khai báo 3 biến name, age, isStudent và in ra màn hình.
// let name = "John";
// let age = 30;
// let isStudent = true;
// console.log(name, age, isStudent);

// 2. Nhập vào hai số và in ra tổng, hiệu, tích, thương.
// let num1 =prompt("Nhập số thứ nhất:");
// let num2 =prompt("Nhập số thứ hai:");
// num1 = parseInt(num1);
// num2 = parseInt(num2);
// console.log("Tổng:", num1 + num2);
// console.log("Hiệu:", num1 - num2);
// console.log("Tích:", num1 * num2);
// console.log("Thương:", num1 / num2);

// 3.Chuyển đổi kiểu dữ liệu: nhập chuỗi "123" và ép sang kiểu số.
// let str = prompt("Nhập chuỗi số:");
// console.log("Kiểu dữ liệu ban đầu:", typeof str);
// str = parseInt(str);
// console.log("Kiểu dữ liệu sau khi ép:", typeof str);

// 4.Tính chu vi và diện tích hình tròn (bán kính nhập từ bàn phím).
// let radius = prompt("Nhập bán kính hình tròn:");
// radius = parseFloat(radius);
// console.log("Chu vi hình tròn:", 2 * 3.14 * radius);
// console.log("Diện tích hình tròn:", 3.14 * radius * radius);

// 5. Tính BMI = cân nặng / (chiều cao²), in ra chỉ số và đánh giá.
// let weight = prompt("Nhập cân nặng (kg):");
// let height = prompt("Nhập chiều cao (m):");
// weight = parseFloat(weight);
// height = parseFloat(height);
// let bmi = weight / (height * height);
// console.log("Chỉ số BMI:", bmi);
// if(bmi < 18.5) {
//     console.log("Bạn bị thiếu cân.");
// } else if(bmi < 24.9) {
//     console.log("Bạn có cân nặng bình thường.");
// } else if(bmi < 29.9) {
//     console.log("Bạn bị thừa cân.");
// } else {
//     console.log("Bạn bị béo phì.");
// }

// 6. Đổi đơn vị: nhập số giây, đổi sang giờ – phút – giây.
// let sogiay = prompt("Nhập số giây:");
// sogiay = parseInt(sogiay);
// let gio = Math.floor(sogiay / 3600);
// let phut = Math.floor((sogiay % 3600) / 60);
// let giay = sogiay % 60;
// console.log(gio + " giờ " + phut + " phút " + giay + " giây");

// 7. Nhập nhiệt độ °C, chuyển sang °F theo công thức F = C * 9/5 + 32.
// let c = prompt("Nhập nhiệt độ (°C):");
// c = parseFloat(c);
// let f = c * 9/5 + 32;
// console.log("Nhiệt độ (°F):", f);

// 8. Nhập số tiền VND, đổi sang USD theo tỉ giá cố định.
// let vnd = prompt("Nhập số tiền (VND):");
// vnd = parseFloat(vnd);
// const tiGia = 26000;
// let usd = vnd / tiGia;
// console.log("Số tiền (USD):", usd);

// II. Cấu trúc điều kiện

// 1.Nhập tuổi → in ra người lớn, trẻ em hay thanh niên.
// let age = prompt("Nhập tuổi của bạn:");
// age = parseInt(age);
// if(age <18){
//     console.log("Bạn là trẻ em.");
// } else if(19 <= age && age <= 30){
//     console.log("Bạn là thanh niên.");
// } else{
//     console.log("Bạn là người lớn.");
// }

// 2.Kiểm tra số nhập vào là chẵn hay lẻ.
// let num = prompt("Nhập một số:");
// num = parseInt(num);
// if(num %2 == 0){
//     console.log(num + " là số chẵn.");
// } else{
//     console.log(num + " là số lẻ.");
// }

// 3. Kiem tra nam nhap vao co phai nam nhuan ko
// let year = prompt("Nhập một năm:");
// year = parseInt(year);
// if((year %4 == 0 && year %100 != 0) || (year %400 == 0)){
//     console.log(year + " là năm nhuận.");
// } else{
//     console.log(year + " không phải năm nhuận.");
// }

// 4. Nhập điểm trung bình → xếp loại (giỏi, khá, trung bình, yếu).
// let diem = prompt("Nhập điểm trung bình:");
// diem = parseFloat(diem);
// if(diem >= 8){
//     console.log("Xếp loại: Giỏi");
// }   else if(diem >= 6.5){
//     console.log("Xếp loại: Khá");
// } else if(diem >= 5){
//     console.log("Xếp loại: Trung bình");
// } else{
//     console.log("Xếp loại: Yếu");
// }

// 5. Nhập tháng → in ra số ngày trong tháng (có xét năm nhuận).
// let month = prompt("Nhập tháng (1-12):");
// month = parseInt(month);
// let year = prompt("Nhập năm:");
// year = parseInt(year);
// let days;
// switch(month){
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         days = 31;
//         console.log(days);
//         break;
//     case 4: case 6: case 9: case 11:
//         days = 30;
//         console.log(days);
//         break;
//     case 2:
//         if((year %4 == 0 && year %100 != 0) || (year %400 == 0)){
//             days = 29;
//             console.log(days);
//         } else{
//             days = 28;
//             console.log(days);
//         }
//         break;
//     default:
//         days = "Tháng không hợp lệ.";
// }

// 6. Nhập 3 số → in ra số lớn nhất, nhỏ nhất.
// let a = prompt("Nhập số thứ nhất:");
// let b = prompt("Nhập số thứ hai:");
// let c = prompt("Nhập số thứ ba:"); 
// a = parseFloat(a);
// b = parseFloat(b);
// c = parseFloat(c);
// let max = a;
// if(b > max){
//     max = b;
//     console.log(max);
// } else if(c > max){
//     max = c;
//     console.log(max);
// }

// let min = a;
// if(b < min){
//     min = b;
//     console.log(min);
// } else if(c < min){
//     min = c;
//     console.log(min);
// }

// 7. Viết máy tính mini đơn giản (2 số + toán tử + - * /).
// let num1 = prompt("Nhập số thứ nhất:");
// let num2 = prompt("Nhập số thứ hai:");
// let operator = prompt("Nhập toán tử (+, -, *, /):");
// num1 = parseFloat(num1);
// num2 = parseFloat(num2);
// let result;
// switch(operator){
//     case "+":
//         result = num1 + num2;
//         console.log("Kết quả:", result);
//         break;
//     case "-":
//         result = num1 - num2;
//         console.log("Kết quả:", result);
//         break;
//     case "*":
//         result = num1 * num2;
//         console.log("Kết quả:", result);
//         break;
//     case "/":
//         if(num2 != 0){
//             result = num1 / num2;
//             console.log("Kết quả:", result);
//         } else{
//             console.log("Lỗi: Không thể chia cho 0.");
//         }
//         break;
//     default:
//         console.log("Toán tử không hợp lệ.");
// }

// III. Vòng lặp
// 1. In ra các số từ 1 đến 100.
// for(let i=0; i<=100; i++){
//     console.log(i);
// }

// 2. In ra các số chẵn từ 1 đến 100.
// for(let i=0; i<=100; i++){
//     if(i%2 == 0){
//         console.log(i);
//     }
// }

// 3. Tính tổng các số từ 1 đến n.
// let n = prompt("Nhap vao n: ");
// n = parseInt(n);
// let sum = 0;
// for(let i=0; i<=n; i++){
//     sum += i;
// }
// console.log(`Tong tu 1 den ${n} la: ${sum}`);

// 4. Tính giai thừa của n. n! = 1*2*3*...*n
// let n = prompt("Nhập vào n: ");
// n = parseInt(n);
// let result = 1;
// for(let i = 1; i<=n; i++){
//     result *= i;
// }
// console.log(`${n}! = ${result}`);

//5. In ra bảng cửu chương 1–10.
// for(let i = 1; i<=10; i++){
//     for(let j = 1; j<= 10; j++){
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }

// 6. Nhập số n → in ra dãy Fibonacci đến n phần tử. 
// dãy fibonaci là dãy số trong đó mỗi số bằng tổng của 2 số liền trước nó VD: 0,1,1,2,3,5
// let n = parseInt(prompt("Nhập vào n: "));
// let a = 0, b = 1;
// let result = `${a}, ${b}`
// for(let i=2; i<=n; i++){
//     let nextNb = a + b;
//     result = result + `, ${nextNb}`;
//     a = b;
//     b = nextNb;
// }

// console.log(result);

// 7. Tính tổng các chữ số của một số nguyên dương.
// let n = parseInt(prompt("Nhập vào số nguyên dương n: "));
// let sum = 0;
// if(n > 0){
//     for(let i = 0; i<=n; i++){
//         let lastNb = n%10;
//         sum += lastNb;
//         n = Math.floor(n/10); // hàm làm tròn sô xuống dùng ở đây để loại bỏ chữ số cuối cùng 
//     }
// } else{
//     n = parseInt(prompt("Nhập lại n: "));
//     for(let i = 0; i<=n; i++){
//         let lastNb = n%10;
//         sum += lastNb;
//         n = Math.floor(n/10); // hàm làm tròn sô xuống dùng ở đây để loại bỏ chữ số cuối cùng 
//     }
// }   
// console.log("Tổng các chữ số là: " + sum);

// 8. Đếm số lượng chữ số của một số.
// let n = parseInt(prompt("Nhập vào n: "));
// let count = 0;
// while (n > 0) {
//     count++;
//     n = Math.floor(n / 10);
// }
// console.log(`n có ${count} chữ số`);

// hoặc ép n sang chuỗi rồi lấy độ dài chuỗi.

// 9. Đảo ngược số nguyên (ví dụ: 12345 → 54321).
// let n = parseInt(prompt("Nhập số nguyên n: "));
// let reversed = 0;
// while (n > 0) {
//     let lastDigit = n % 10; // Lấy chữ số cuối cùng
//     reversed = reversed * 10 + lastDigit; // Thêm chữ số cuối cùng vào reversed
//     n = Math.floor(n / 10);
// }
// console.log("Số đảo ngược là: " + reversed);

// hoặc ép n sang chuỗi rồi dùng hàm reverse của mảng để đảo ngược chuỗi.

// 10. Kiểm tra số nguyên tố.
let n = parseInt(prompt("Nhập số nguyên n: "));
let ktsnt = true;
if(n < 2){
    ktsnt = false;
} else {
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0){
            ktsnt = false;
            break;
        }
    }
}
if(ktsnt){
    console.log(n + " là số nguyên tố.");
} else{
    console.log(n + " không phải số nguyên tố.");
}