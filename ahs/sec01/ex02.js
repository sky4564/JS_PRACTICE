// 삼각형 판별하기 (가장 긴 변의 길이 > 나머지 두 변의 합)

function solution(a, b, c) {
  const max = Math.max.apply(Math, [a, b, c]);
  const sum = [a, b, c].reduce((acc, cur) => acc + cur);
  const result = (max > (sum - max)) ? true : false
  return result;
}

console.log(solution(6, 7, 11)); // false 
console.log(solution(6, 5, 11)); // false
console.log(solution(6, 4, 11)); // true
