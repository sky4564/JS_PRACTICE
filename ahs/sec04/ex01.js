// 자릿수의 합
// 자릿수의 합이 같은 경우 원래 숫자가 더 큰 숫자가 정답

function solution(input){
  let numbers = input;
  let max = Number.MIN_SAFE_INTEGER;
  let result = 0;
  
  numbers.forEach(n => {
    let sum = 0;
    let tmp = n;
    while (tmp > 0) {
      sum += tmp % 10;
      tmp = Math.floor(tmp/10);
    }
    if (sum > max) {
      max = sum;
      result = n;
    }
    else if (sum === max){
      if (n > result) result = n;
    }
  });
  
  return result;
}

let n = 7;
let input = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(input)); // 137

