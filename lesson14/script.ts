function infiniteLoop(): never {
    while (true) {
        console.log("This is an infinite loop");
    }
}

function throwError(message: string): never {
    throw new Error(message);
}
// Trong ví dụ này, hàm infiniteLoop không bao giờ kết thúc và không bao giờ trả về giá trị, 
// do đó nó có kiểu never.
// Hàm throwError luôn ném ra một lỗi và không bao giờ trả về giá trị, vì vậy nó cũng có kiểu never.