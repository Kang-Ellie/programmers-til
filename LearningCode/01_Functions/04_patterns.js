// 1. IIFE (즉시 실행 함수) - 정의와 동시에 실행
(function () {
  console.log("프로그램 시작!");
})();

// 2. 재귀함수
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// 3. 중첩함수
function outer() {
  const message = "Outer";
  function inner() {
    console.log(message);
  }
  inner();
}

// 4. 콜백함수
function repeat(n, action) {
  for (let i = 0; i < n; i++) action(i);
}

repeat(3, console.log);
