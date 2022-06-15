/* BÀI TẬP 1
 Mô hình 3 khối 
 đầu vào  : nhập vào 3 số nguyên 
 xử lí :
 Gọi 3 số nguyên nhập vào lần lượt là : a, b, c
 ta tiến hành chia nhỏ từng cặp số và so sánh  : (a,b);(a,c);(b,c)
 nếu a>=b và b>=c => c<b<a
 nếu a>=c và c>=b => b<c<a
 nếu b>=a và a>=c => c<a<b
 nếu b>=c và c>=a => a<c<b
 nếu c>=a và a>=b => b<a<c
 nếu c>=b và b=>a => a<b<c
 đầu ra : xuất ra 3 số theo thứ tự tăng dần 
 */
document.getElementById('SX_TangDan').onclick = function(){
    var  a = Number(document.getElementById('a').value);
    var  b = Number(document.getElementById('b').value);
    var  c = Number(document.getElementById('c').value);
    var sapXep ='';
    //progress
    if (a>=b && b>=c){
        sapXep =  c + '<' + b + '<' +a ;
    }else if(a>=c && c>=b){
        sapXep =  b + '<' + c + '<' + a;
    }else if(b>=a && a>=c){
        sapXep =  c + '<' + a + '<' + b;
    }else if(b>=c && c>=a){
        sapXep =  a + '<' + c + '<' + b;
    }else if(c>=a && a>=b){
        sapXep =  b + '<' + a + '<' + c;
    }else if (c>=b && b>=a){
        sapXep =  a + '<' + b + '<' + c; 
    }
    document.getElementById('ketQua_1').innerHTML = sapXep;
}
/* BÀI TẬP 2 */
/*
Mô hình ba khối bài tập 2
Đầu vào : nhập vào các lựa chọn của mình ở phần dropdown ở bài này là 5 trường hợp
Xử lí : mình lần lượt gắn value cho 5 giá trị là :
+ Ta lần lượt gán  B =  bố khi người dùng tích chọn B => xin chào bố
+ Ta lần lượt gán  M =  mẹ khi người dùng tích chọn => xin chào mẹ
+ Ta lần lượt gán  AT = anh trai khi người dùng tích chọn => xin chào anh trai
+ Ta lần lượt gán  EG = em gái khi người dùng tích chọn => xin chào em gái 
+ Ta lần lượt gán  NL = người lạ khi người dùng tích chọn=> xin chào người lạ
Đầu ra : xuất ra lời chào tương ứng với tên thành viên
*/
document.getElementById('loiChao').onclick = function(){
    var luaChon = document.getElementById('luaChon').value;
    var ketquaa = '' ;
    if (luaChon === 'B'){
        ketquaa = 'Xin chào bố !';
    }else if(luaChon === 'M'){
        ketquaa = 'Xin chào mẹ !'; 
    }else if(luaChon === 'AT'){
        ketquaa = 'Xin chào anh trai !';
    }else if(luaChon === 'EG'){
        ketquaa = 'Xin chào em gái !';
    }else {
        ketquaa = 'Xin chào người lạ !';
    }
    document.getElementById('ketQua_2').innerHTML = ketquaa;
}
// BÀI TẬP 3
/*
Mô hình 3 khối :
đầu vào : Nhập từ màn hình vào 3 giá trị số nguyên bất kì 
xử lí :
+ Ta tiến hành khởi tạo 5 giá trị number1.number2,number3 và 1 biến đếm counter và 1 biến soLe
Nếu number1 % 2 === 0 thì biến counter + 1
Nếu number2 % 2 === 0 thì biến counter + 1
Nếu number3 % 2 === 0 thì biến counter + 1
Sau đó ta lấy 3 - counter = soLe
biến counter sẽ được hiểu tượng trưng cho số chẵn có trong bài 
đầu ra : xuất ra có bao nhiêu số chẵn và bao nhiêu số lẻ 
*/
document.getElementById('tinhChanLe').onclick = function(){
    var  number1 = Number(document.getElementById('number1').value);
    var  number2 = Number(document.getElementById('number2').value);
    var  number3 = Number(document.getElementById('number3').value);
    var soLe = 0;
    var couter = 0;
    if (number1 % 2 === 0){
       couter = couter +1;
    }
    if(number2 % 2 === 0){
        couter = couter +1;
    }
    if(number3 % 2 === 0){
        couter = couter +1;
    }
    soLe = 3 - couter;
document.getElementById('ketQua_3').innerHTML = "Có " + couter  +" số chẵn "+" và có "+ soLe +" số lẻ";
}
/*
BÀI TẬP 4 :
mô hình 3 khối : 
đầu vào :  nhập vào 3 cạnh của tam giác lần lượt là a,b,c
xử lí : 
TH1 : nếu 3 cạnh nhập a = b =c => tam giác đều
TH2 : nếu 3 cạnh của tam giác có 2 cạnh bằng nhau và khác cạnh còn lại => tam giác đều
TH3 : nếu có 1 cạnh của tam giác bình phương bằng tổng bình phương 2 cạnh còn lại => tam giác vuông
Đầu ra : Tên của tam giác dựa vào 3 cạnh nhập vào
*/
document.getElementById('tinhTamGiac').onclick = function(){
    var Canh1 = Number(document.getElementById('Canh1').value);
    var Canh2 = Number(document.getElementById('Canh2').value);
    var Canh3 = Number(document.getElementById('Canh3').value);
    var tamGiac = '';
    if((Canh1 == Canh2) && (Canh1==Canh3)){
        tamGiac = 'Tam Giác Đều';
    }else if ((Canh1 == Canh2 )&&(Canh1 != Canh3) ||(Canh1 == Canh3 ) &&(Canh1 != Canh2) || ( Canh2 == Canh3 )&&(Canh2 != Canh1)){
        tamGiac = 'Tam Giác Cân';
    }else if ( (Canh1*Canh1== Canh2*Canh2 + Canh3*Canh3)||(Canh2*Canh2== Canh1*Canh1 + Canh3*Canh3)||(Canh3*Canh3== Canh2*Canh2 + Canh1*Canh1)){
        tamGiac = 'Tam Giác Vuông';
    }else{
        tamGiac = 'Tam Giác Khác'
    }
    document.getElementById('ketQua_4').innerHTML = tamGiac ; 
 }