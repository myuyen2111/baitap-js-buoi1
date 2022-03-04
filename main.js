console.log("*Bài 1*");
/* 
**Đầu vào:
- Lương 1 ngày là 100000
- Số ngày làm
- Tổng lương
**Xử lý:
- Tạo biến lương 1 ngày: luongNgay và gán giá trị là 100000;
- Tạo biến số ngày làm: ngayLam và gán giá trị;
- Tạo biến tính tiền lương: tienLuong
- Sử dụng công thức luongNgay * ngayLam 
- Gán công thức trên vào biến tienLuong
- Sử dụng console.log để show kết quả;
**Đầu ra:
Kết quả tiền lương */
var luongNgay = 100000;
var ngayLam = 27;
var tienLuong;
console.log("Số ngày làm: "+ngayLam);
tienLuong = luongNgay * ngayLam;
console.log(
  "Tiền lương tương ứng với " + ngayLam + " ngày làm là: " + tienLuong
);
/* */
console.log("*Bài 2*");
/*
**Đầu vào:
- 5 giá trị của 5 số thực;
- Giá trị trung bình;
**Xử lý:
- Tạo 5 biến tương ứng với 5 số thực: number1, number2,number3, number4, number5;
- Tạo biến giá trị trung bình: average;
- Gán giá trị cho 5 biến;
- Gán công thức vào biến average: (number1+number2+number3+number4+number5)/5
- Show kết quả
**Đầu ra: Giá trị trung bình của 5 số thực */
var number1=-1, number2=5, number3=6, number4=2, number5=10;
var average;
console.log("Giá trị của số thực 1 là: "+number1);
console.log("Giá trị của số thực 2 là: "+number2);
console.log("Giá trị của số thực 3 là: "+number3);
console.log("Giá trị của số thực 4 là: "+number4);
console.log("Giá trị của số thực 5 là: "+number5);
average=(number1+number2+number3+number4+number5)/5;
console.log("Giá trị trung bình của 5 số thực là: " +average);
/* */
console.log("*Bài 3*");
/*
**Đầu vào:
- Giá USD: 23500 VND
- Tiền USD
- Tiền VND
**Xử lý:
- Khai báo biến giá USD: giaUSD và gán giá trị 23500;
- Khai báo biến tienUSD, tienVND.
- Gán giá trị cho biến tienUSD.
- tienVND=tienUSD * giaUSD
- Show kết quả tienVND.
**Đầu ra: Kết quả tiền VND */
var giaUSD=23500;
var tienUSD=2;
var tienVND;
console.log ("Tiền USD là: $" +tienUSD);
tienVND=tienUSD * giaUSD;
console.log("Tiền VND là: " +tienVND+"VNĐ");
/* */
console.log("*Bài 4*");
/*
**Đầu vào:
-Chiều dài;
-Chiều rộng;
-Chu vi;
-Diện tích;
**Xử lý:
-Tạo biến: chieuDai,chieuRong, chuVi,dienTich
-Gán giá trị cho biến chieuDai, chieuRong.
-chuVi= (chieuDai+chieuRong)*2.
-dienTich=chieuDai * chieuRong;
-Show kết quả chuVi, dienTich.
**Đầu ra: Kết quả chu vi, diện tích.*/
var chieuDai=10;
var chieuRong=3;
var chuVi,dienTich;
console .log("Chiều dài hình chữ nhật là: "+chieuDai);
console .log("Chiều rộng hình chữ nhật là: "+chieuRong);
chuVi=(chieuDai+chieuRong)*2;
dienTich=chieuDai * chieuRong;
console .log("Chu vi hình chữ nhật là: "+chuVi);
console .log("Diện tích hình chữ nhật là: "+dienTich);
/* */
console.log("*Bài 5*");
/*
**Đầu vào:
-Số n có hai chữ số;
**Xử lý:
-Tạo biến n, gán vào biến n số có hai chữ số.
-Tạo các biến cho chữ số hàng chục, chữ số hàng đơn vị: hangChuc, hangDV.
-Tạo biến tính tổng: tongKyso;
-Tách chữ số hàng chục 
-Tách chữ số hàng đơn vị
-Tính tổng
-Show kết quả;
**Đầu ra: Kết quả tổng 2 ký số. */
var n=24;
var hangChuc,hangDV,tongKyso;
console.log("Số có hai chữ số n là: "+n);
hangChuc=Math.floor(n/10);
console.log("Chữ số hàng chục là: "+hangChuc);
hangDV=n % 10;
console.log("Chữ số hàng đơn vị là: "+hangDV);
tongKyso=hangChuc + hangDV;
console.log("Tổng 2 ký số là "+tongKyso);






