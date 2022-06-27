// 문자열 찾기

function solution(input){
  const result = input.split("").filter(e => e === 'R');
  return result.length;
}

// input = "COMPUTERPROGRAMMING"
// find 'R'
let input = "COMPUTERPROGRAMMING";
console.log(solution(input)); // 3

