/**
 * Đầu vào
 * - tạo biến priceUSD cho người dùng nhập vào bằng prompt
 * - tạo biến amountUSD cho người dùng nhập vào số lượng USD muốn quy đổi bằng prompt
 * Xử lí
 * - tạo biến tongTienVND bằng 0
 * - cập nhật lại giá trị cho tongTienVND bằng priceUSD * amountUSD
 * Đầu ra
 * - in ra biến tongTienVND bằng log
 */

let priceUSD = prompt("Nhập giá USD: ");
let amountUSD = prompt("Số lượng USD cần quy đổi: ");

let tongTienVND=0;
tongTienVND = priceUSD * amountUSD;
console.log("Số tiền: "+tongTienVND+" VND");
