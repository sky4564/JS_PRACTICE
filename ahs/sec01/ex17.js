// 중복단어제거

function solution(input){
  // Set 활용
  let result = [...new Set(input)];
  return result;
}

let input = ["good", "time", "good", "time", "student"];
console.log(solution(input)); // ["good", "time", "student"]

