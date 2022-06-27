// 세 수 중 최솟값

function solution(a, b, c) {
  let min = Math.min.apply(Math, [a,b,c]);
  return min;
}
console.log(solution(6, 5, 11));

