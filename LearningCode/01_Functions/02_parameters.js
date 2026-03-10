// 1. 기본값 매개변수 (Default function parameter)
function welcome(arg) {
  console.log(arg);
}

welcome();

function welcome2(name = "손님") {
  console.log(`안녕하세요, ${name}!!`);
}

welcome2();

// 2. 나머지 매개변수 (Rest parameter) - 배열로 들어옴
function num(arg, ...numbers) {
  console.log(numbers);
}

num(1, 2, 3, 4, 5);

// 3. arguments 객체 - 유사 배열
function showArgs() {
  console.log(arguments);
}

showArgs(1, 2, 3, 4, 5);
