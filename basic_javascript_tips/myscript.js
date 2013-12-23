var myList = document.getElementById('myList');
var list = document.getElementsByTagName('li');
console.log(myList);
console.log(list);
console.log(list[1]);

var fourthLi = document.createElement('li');
var fourthLink = document.createElement('a');
fourthLink.href = 'http://google.com';
var fourthText = document.createTextNode('Four');
//myList.appendChild(fourthLi).appendChild(fourthText);
myList.appendChild(fourthLi).appendChild(fourthLink).appendChild(fourthText);
