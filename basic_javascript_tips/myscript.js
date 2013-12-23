// switch

var x = 0;
switch (x) {
    case 0:
    case 1:
    case 2:
        // 0-2はすべてこの処理を通る
        console.log(x);
        break;
    default:
        break;
}
