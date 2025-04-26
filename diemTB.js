/**
 * Đầu vào
 * - tạo 5 biến cho người dùng nhập vào bằng prompt
 * Xử lí
 * - tạo biến diemTB bằng 0
 * - tạo biến tongDiem bằng tổng của 5 biến vừa nhập
 * - cập nhật giá trị diemTB bằng tongDiem / 5
 * Đầu ra
 * - In ra kết quả diemTB
 */

let num_1 = prompt("Nhập số thứ 1: ");
let num_2 = prompt("Nhập số thứ 2: ");
let num_3 = prompt("Nhập số thứ 3: ");
let num_4 = prompt("Nhập số thứ 4: ");
let num_5 = prompt("Nhập số thứ 5: ");

num_1 = Number(num_1);
num_2 = Number(num_2);
num_3 = Number(num_3);
num_4 = Number(num_4);
num_5 = Number(num_5);

console.log(typeof num_1);

let tongDiem = num_1 + num_2 + num_3 + num_4 + num_5;
let diemTB = 0;
diemTB = tongDiem / 5;
console.log(diemTB);
