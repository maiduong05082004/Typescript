// switch thông thường sẽ không thể kiểm tra được các điều kiện và chỉ sử dụng được mô hình thác nước
const age1:number=25;
switch(age1){
    case 10:
        console.log("Bạn chưa đủ tuổi");
    break;
    case 15:
        console.log("Bạn đã đủ tuổi");    
    break;
    case 25:
        console.log("bạn đã đi làm");
    break;
    default:
        console.log("Bạn quá già");
}

//switch case mô hình thác nước code khó dài và không được tối ưu
let age2: number = 21;

switch (age2) {
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
        console.log("Cấp độ tuổi: 10 -> 15");
        break;
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
        console.log("Cấp độ tuổi: 16 -> 20");
        break;
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
        console.log("Cấp độ tuổi: 21 -> 25");
        break;
    default:
        console.log("Tuổi không nằm trong các cấp độ đã định");
        break;
}

//switch case có điều kiện thường sử dụng true để check điều kiện
let age3: number = 21;

switch (true) {
    case (age3 >= 10 && age3 <= 15):
        console.log("Cấp độ tuổi: 10 -> 15");
        break;
    case (age3 >= 16 && age3 <= 20):
        console.log("Cấp độ tuổi: 16 -> 20");
        break;
    case (age3 >= 21 && age3 <= 25):
        console.log("Cấp độ tuổi: 21 -> 25");
        break;
    default:
        console.log("Tuổi không nằm trong các cấp độ đã định");
        break;
}
