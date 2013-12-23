// 厳密な比較演算子

var a = 5;
var b = 5;
console.log(a == b);  // true
console.log(a === b); // true

b = '5';
console.log(a == b);  // true
console.log(a === b); // false 型が違う
