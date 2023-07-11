//Câu 1

//câu 2
//a Tạo và gán giá trị mặc định cho 5 biến bất kì sử dụng ngẫu nhiên cả 3 key (var, let, const) tên biến gồm 2 từ trở lên bằng tiếng anh
let TechnologyCenter= "MindX";
TechnologyCenter = "AppTech";
console.log(TechnologyCenter);

let missUniverse= "Catriona Gray";
missUniverse = "Paulina Vega";
console.log(missUniverse);


var keyPersonnel = 30;
keyPersonnel = 20;
console.log(keyPersonnel);

var thTrueMilk = "thành lập 2009";
thTrueMilk = "Có hàng ngàn nhân viên";
console.log(thTrueMilk);

// const PROTONMASS = 1.67262158;
// console.log("Khối lượng proton " + PROTONMASS);
// PROTONMASS = 9.8; (xem giùm em chỗ này tại sao lỗi)

//Câu 3
var age = 18;
age = "mindX Dream";
console.log(age);

//Câu 4
let point = "Điểm 10";
let is = "là";
let absolute = "tuyệt đối";
console.log(point + is + absolute);

//Câu 5
const pi = 3.14;
let r = 5;
console.log(pi * r ** 2);

//Câu 6
//a + b Tạo biến lưu trữ phù hợp cho tên 5 người bạn của bạn. Tạo biến lưu trữ tuổi tương ứng cho 5 người bạn trên
var nameWendy, nameIrene, nameYeri, nameSeulgi, nameJoy, ageWendy, ageIrene, ageYeri, ageSeulgi, ageJoy;
nameWendy = "Wendy";
nameIrene = "Irene";
nameYeri = "Yeri";
nameSeulgi = "Seulgi";
nameJoy = "Joy";
ageWendy = 28;
ageIrene = 31;
ageYeri = 24;
ageSeulgi = 28;
ageJoy = 26;
//c Xem lại kiến thức string literal để nối chuỗi tên và tuổi của  từng người bạn
console.log("Tuổi của " + nameWendy + ageWendy);
console.log("Tuổi của " + nameIrene + ageIrene);
console.log("Tuổi của " + nameYeri + ageYeri);
console.log("Tuổi của " + nameSeulgi + ageSeulgi);
console.log("Tuổi của " + nameJoy + ageJoy);

// d Tìm và in ra chiều dài tên của những người bạn trên
var lengthWendy, lengthIrene, lengthYeri, lengthSeulgi, lengthJoy;

lengthWendy = nameWendy.length;
lengthIrene = nameIrene.length;
lengthYeri = nameYeri.length;
lengthSeulgi = nameSeulgi.length;
lengthJoy = nameJoy.length;
console.log("Chiều dài tên của Wendy là " + lengthWendy);
console.log("Chiều dài tên của Irene là " + lengthIrene);
console.log("Chiều dài tên của Yeri là " + lengthYeri);
console.log("Chiều dài tên của Seulgi là " + lengthSeulgi);
console.log("Chiều dài tên của Joy là " + lengthJoy);

// e Tìm và in ra độ tuổi trung bình của những người bạn trên
console.log("Tuổi trung bình của 5 người " + (ageWendy + ageIrene + ageYeri + ageSeulgi + ageJoy) / 5);

//f Tìm và in ra màn hình tổng số tuổi của 5 bạn trên
console.log("Tổng số tuổi của 5 người " + (ageWendy + ageIrene + ageYeri + ageSeulgi + ageJoy));


// BTVN
// Câu 1: Viết chương trình JavaScript để tính tổng của hai số nguyên đã cho và in kết quả ra màn hình.
let a = 20;
let b = 15;
let sum = a + b;
console.log("Tổng a và b " + sum);
// Câu 2:Viết chương trình JavaScript để tính chu vi của một hình tròn với bán kính đã cho và in kết quả ra màn hình.
let r1 = 5;
let perimeter = 2 * Math.PI * r;
console.log("Chu vi hình tròn là " + perimeter);
//câu 3:Viết chương trình JavaScript để kiểm tra xem một số đã cho có phải là số chẵn hay số lẻ không và in kết quả ra màn hình.
let c = 11;
if(c % 2 ==0){
    console.log("Vậy c là số chẵn " + c);
}else console.log("Vậy c là số lẻ " + c);

// câu 4:Viết chương trình JavaScript để tạo ra một chuỗi mới từ hai chuỗi đã cho bằng cách nối chúng lại với nhau và in kết quả ra màn hình.
var fisrtName = "Bích Trâm ";
var lastName = "Đỗ Phạm ";
var fullName = lastName + fisrtName;
console.log("Họ tên đầy đủ là " + fullName);
 //câu 5: Viết chương trình JavaScript để kiểm tra xem một chuỗi đã cho có chứa một từ hay không và in kết quả ra màn hình.
let school = "Tôi là sinh viên OU";
let key = "OU";
if(school.includes(key)){
    console.log("Chuỗi " + school + " có chứa từ " + key);
}else console.log("Chuỗi " + school + "không chứa từ " + key);
 // câu 6: Viết chương trình JavaScript để kiểm tra xem một chuỗi đã cho có phải là chuỗi rỗng hay không và in kết quả ra màn hình.
let student = "Demi";
if(student.length == 0){
    console.log("Chuỗi này là chuỗi rỗng ");
}else console.log("Chuỗi này không phải là chuỗi rỗng ");

 // câu 7:Viết một chương trình JavaScript để kiểm tra xem một số đã cho có phải là số dương hay số âm không.
 let x = -20;
 if(x > 0){
    console.log("Vậy x là số dương " + x);
 }else if(x < 0){
    console.log("Vậy x là số âm " + x);
 }else console.log("Vậy x không là số dương cũng không là số âm " + x);

 // câu 8: Viết một chương trình JavaScript để tính tổng, hiệu, tích, thương của hai số đã cho.
let d = 55;
let e = -10;
let sum1 = d + e;
let difference = d - e;
let product = e * d;
let quotient = d / e;
console.log("Tổng của 2 số là: " + sum1);
console.log("Hiệu của 2 số là: " + difference);
console.log("Tích của 2 số là: " + product);
console.log("Thương của 2 số là: " + quotient);

