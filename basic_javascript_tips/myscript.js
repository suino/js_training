// 即時関数、無名関数

function helloWorld() {
    console.log('Hello World');
}

helloWorld();

(function helloWorld() {
    console.log('Hello World2');
})();
