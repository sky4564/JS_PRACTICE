// 가장 짧은 문자거리

function solution(input, target) {
  let result = input.split("").fill(0).map((w, i) => {
    let distance = 1;
    if (input[i] === target) {
      return 0;
    } else if (input[i-1] === target || input[i+1] === target) {
      distance = 1;
      return distance;
    } else {
      distance++;
      return distance;
    }
  });
  
  return result;
}

let input = "teachermode";
let target = "e";
console.log(solution(input, target)); // 1 0 1 2 1 0 1 2 2 1 0
