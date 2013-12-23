var i = 0;

/*
var timerId = setInterval(function() {
    console.log(++i);
    if (i >= 5) {
        clearInterval(timerId);
    }
}, 1000);
*/

function plusOne() {
    console.log(++i);
    var timerId = setTimeout(plusOne, 1000);
    if (i >= 5) {
        clearTimeout(timerId);
    }
}
plusOne();
