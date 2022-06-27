// 1부터 N까지 합 출력하기 (n < 20)

// [Using Array.from](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
// Sequence generator function
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

function solution(n) {
  let sum = range(1, n, 1).reduce((acc, cur) => acc + cur);
  return sum;
}

console.log(solution(6)); // 21
console.log(solution(10)); // 55


// Using for loop
function solution(n) {
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(solution(6));
console.log(solution(10));

