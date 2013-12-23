// 0.0 <= Math.random() < 1.0

// 0-9のランダムな整数値
var x = Math.floor(Math.random() * 10);

// 1-6のランダムな整数値
// *6 0.0 <= Math.random() < 6.0
// floor: 与えた値以下の最大の整数
// 0, 1, 2, 3, 4, 5
// +1 => 1, 2, 3, 4, 5, 6
var y = Math.floor(Math.random() * 6) + 1;

console.log(x);
console.log(y);
