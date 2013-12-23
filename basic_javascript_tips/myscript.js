// setTimeout:  前回の処理が終わったかどうかを考慮する
// setInterval: 考慮しない

setTimeout(function () {
    // 1秒以上の処理でクラッシュする
}, 1000);

var i = 0;
/*
setInterval(function () {
    console.log(++i);
}, 1000);
*/

// 1秒後に自分を呼び出す
function plusOne() {
    console.log(++i);
    setTimeout(plusOne, 1000);
};
plusOne();
