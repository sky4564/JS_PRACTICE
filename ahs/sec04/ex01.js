// 자릿수의 합
// 자릿수의 합이 같은 경우 원래 숫자가 더 큰 숫자가 정답

function solution(input) {


  /*
  // 강의 풀이
  let numbers = input;
  let max = Number.MIN_SAFE_INTEGER;
  let result = 0;

  numbers.forEach(n => {
    let sum = 0;
    let tmp = n;
    while (tmp > 0) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      result = n;
    }
    else if (sum === max) {
      if (n > result) result = n;
    }
  });

  return result;
  */

  let answer, max = Number.MIN_SAFE_INTEGER;
  for (let x of input) {
    let sum = x.toString().split('').reduce((a, b) => a + Number(b), 0); // 11 10 9 4 8 11 6
    if (sum > max) { // 자릿수의 합이 max보다 큰 경우
      max = sum;
      answer = x;
    }
    else if (sum === max) { // 자릿수의 합이 max와 같은 경우
      if (x > answer) answer = x;
    }
  }
  return answer;

}

let n = 7;
let input = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(input)); // 137

