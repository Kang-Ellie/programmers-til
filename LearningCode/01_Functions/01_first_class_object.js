// 1. 자바스크립트 함수는 함수의 실제 매개변수가 될 수 있다.
function execute(func) {
  func();
}

function sayHello() {
  console.log("Hello!");
}

execute(sayHello);

// 2. 자바스크립트 함수는 함수의 반환값이 될 수 있다.
function createAdder() {
  return function (x) {
    return x + 1;
  };
}

// 3. 자바스크립트 함수는 할당명령문의 대상이 될 수 있다.
const myFunc = function () {};

// 4. 자바스크립트 함수는 동일비교의 대상이 될 수 있다.
console.log(sayHello === sayHello); // true
