// 뒤집은 소수

/*
// 강의 풀이
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}
*/

function solution(input) {
  let numbers = input;
  let result = numbers.map(n => {
    let reversed = [];
    let tmp = n;
    while (tmp > 0) {
      reversed.push(tmp % 10);
      tmp = Math.floor(tmp / 10);
    }
    return Number(reversed.join("")); // 23, 55, 26, 2, 52, 73, 2, 3, 1
  })
    .filter(n => {
      for (var i = 2; i < n; i++) { if (n % i === 0) return false; }
      return n > 1;
    })

  return result;
}

let input = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(input)); // [23, 2, 73, 2, 3]
