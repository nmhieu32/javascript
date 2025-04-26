/**
 * Đầu vào
 * - tạo biến chieudai cho người dùng nhập vào bằng prompt
 * - tạo biến chieurong cho người dùng nhập vào bằng prompt
 * Xử lí
 * - chuyển kiểu dữ liệu của chieudai và chieurong về Number
 * - tạo biến dientich = 0
 * - tạo biến chuvi = 0
 * - cập nhật lại giá trị cho dientich bằng chieudai * chieurong
 * - cập nhật lại giá trị cho chuvi bằng (chieudai + chieurong) *2
 * Đầu ra
 * - In ra biến dientich và chuvi bằng log
 */

let chieudai = prompt("Nhập chiều dài: ");
let chieurong = prompt("Nhập chiều rộng: ");

chieudai = Number(chieudai);
chieurong = Number(chieurong);

let dientich = 0;
let chuvi = 0;
dientich = chieudai * chieurong;
chuvi = (chieudai + chieurong) *2;

console.log(`Diện tích: ${dientich}, Chu vi: ${chuvi}`);
