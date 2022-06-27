// 최솟값 구하기
// 7개 수 중 가장 작은 수 출력 (5 3 7 11 2 15 17)

// If numbers input as arguments
function solution(n) {
  const array = Array.from(solution.arguments);
  const result = Math.min.apply(Math, array);
  return result;
}
console.log(solution(5, 3, 7, 11, 2, 15, 17)); // 2


// If numbers input as array
function solution(n) {
  const result = Math.min.apply(Math, n);
  return result;
}
let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr)); // 2


// Set first number as min number
function solution(n) {
  let min = n[0];
  
  for(let i = 0; i < n.length; i++) {
    if(n[i] < min) {
      min = n[i];
    }
  }
  return min;
}
let input = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(input)); // 2
