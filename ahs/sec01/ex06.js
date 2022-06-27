// 홀수 (입력값 중 홀 수의 합, 홀 수 중 최솟값 출력)

function solution(n) {
  const oddNumbers = n.filter(num => num % 2 !== 0);
  const sum = oddNumbers.reduce((acc, cur, idx) => acc += cur, 0);
  const min = Math.min.apply(Math, oddNumbers);
  
  return {sum: sum, min: min};
}

let input = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(input).sum); // 256
console.log(solution(input).min); // 41
