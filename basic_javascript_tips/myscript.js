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

var fifthLi = fourthLi.cloneNode(true);
fifthLi.innerHTML = '<a href="http://yahoo.co.jp">Five</a>';

// 4の後に追加される
// myList.appendChild(fifthLi);

// 5を4の前に追加する
myList.insertBefore(fifthLi, fourthLi);
