// 1. 함수 선언문
function multiply(a, b) {
  return a * b;
}

console.log(multiply(1, 2)); // 2

// 2. 함수 표현식
const add = function (a, b) {
  return a + b;
};
console.log(add(3, 4)); // 7

// 3. Function 생성자 함수
const subtract = new Function("a", "b", "return a - b");
console.log(subtract(5, 6)); // -1

// 4. 화살표 함수 표현식
const divide = (a, b) => {
  return a / b;
};

console.log(divide(8, 4)); // 2
