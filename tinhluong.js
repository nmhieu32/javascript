/**
 * Đầu vào
 * - tạo biến luongNgay và gán = 100000
 * - tạo biến soNgayLam và cho user nhập
 * Xử lí
 * - tạo biến tongLuong và gán gtri = 0
 * - tongLuong được cập nhật giá trị là luongNgay *
 * Đầu ra
 * - In ra tongLuong
 */

let luongNgay = 100000;
let soNgayLam = prompt("Số ngày làm việc: ");

let tongLuong = 0;
tongLuong = luongNgay * soNgayLam;
console.log(tongLuong);
