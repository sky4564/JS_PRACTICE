// 10부제
// 첫 줄 = 날짜, 두 번째 줄 = 7대의 자동차 번호 끝 두 자리
// 자동차 끝자리가 날짜 끝자리와 일치하는 경우 운행 금지

function solution(date, numbers) {
  const result = numbers
    .map(n => n % 10)
    .map(n => (n === date) ? 1 : 0)
    .reduce((a, b) => a + b);
  return result;
}

let date = 3;
let numbers = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(date, numbers)); // 3

date = 0;
numbers = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(date, numbers)); // 3

date = 1;
numbers = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(date, numbers)); // 1
