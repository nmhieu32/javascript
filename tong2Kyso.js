/**
 * Đầu vào
 * - tạo biến kyso cho người dùng nhập vào bằng prompt
 * Xử lí
 * - chuyển kiểu dữ liệu của kyso về Number
 * - tạo biến soHangdv = kyso % 10
 * - tạo biến soHangchuc = kyso / 10
 * - tạo biến tong2Kyso = 0
 * - cập nhật lại giá trị cho biến tong2Kyso bằng soHangchuc + soHangdv
 * Đầu ra
 * - In ra biến tong2Kyso bằng log
 */

let kyso = prompt("Nhập số có 2 chữ số: ");

kyso = Number(kyso);

let soHangdv =parseInt(kyso % 10);
let soHangchuc =parseInt(kyso / 10);

let tong2Kyso = 0;
tong2Kyso = soHangdv + soHangchuc;

console.log(`Tổng 2 ký số là: ${tong2Kyso}`);
