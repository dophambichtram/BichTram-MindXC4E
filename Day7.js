// Câu 1:
let a = 25;
if (Number.isInteger(a)) {
    console.log(a + " là số nguyên");
} else {
    console.log(a + " không phải là số nguyên");
}
//Câu 2:
var n = 31;
if (n > 1) {
    var soNguyenTo = true;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            soNguyenTo = false;
            break;
        }
    }
    if (soNguyenTo) {
        console.log(n + " là số nguyên tố");
    } else {
        console.log(n + " không phải là số nguyên tố")
    }
}

// Câu 3:
let c = 9;
if (c % 2 == 0) {
    console.log("Vậy c là số chẵn ");
} else console.log("Vậy c là số lẻ ");

// Câu 4:
let x = 20;
let b = 0;
for (var i = 0; i * i <= x; i++) {
    let square = i * i;
    b++;
    console.log(square);
} console.log("có " + b + " số chính phương nhỏ hơn " + x);


// BTVN
// Câu 1;
let age = 20;
if (age >= 18) {
    console.log("Bạn đủ tuổi lái xe");
} else console.log("Bạn không đủ tuổi lái xe");

// Câu 2;
let a1 = 5;
if (a1 > 0) {
    console.log(a1 + " Là số dương");
} else if (a1 < 0) {
    console.log(a1 + " Là số âm");
} else console.log(a1 + " Không là số âm cũng không là số dương")

// Câu 3:
let x1 = 20;
if (x1 % 3 === 0 && x1 % 5 === 0) {
    console.log(x1 + " Là số chia hết cho 3 và 5");
} else console.log(x1 + " Là số không chia hết cho 3 và 5");

// Câu 4:
let day = 5;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thurday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Số bạn nhập không hợp lệ. Nhập lại số từ 1 -> 7");
}

// Câu 5:
let n1 = 20;
let sum = 0;
for (let i = 1; i <= n1; i++) {
    sum += i;
} console.log("Tổng các số là " + sum);

// Câu 6:
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    } console.log(i);
}

// câu 7:
for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        console.log("Số chia hết cho 3 đầu tiên trong khoảng từ 1 đến 20 là " + i);
        break;
    }
}

// câu 8:
document.write("Câu 8: <br> Câu lệnh được lặp 100 lần. Vì i < 100 thì vòng lặp sẽ kết thúc khi i === 100")

// câu 9:
document.write("<br>Câu 9 <br> Vòng lặp While sẽ kiểm tra điều kiện trước khi thực hiện mã lặp, nếu điều kiện sai từ đầu thì mã lặp sẽ không đc thực hiện. <br> Vòng lặp do while sẽ thực hiện mã lặp trước rồi mới kiểm tra điều kiện. Tức là mà lặp vẫn sẽ thực hiện ít nhất 1 lần dù điều kiện có sai ngay từ đầu.");