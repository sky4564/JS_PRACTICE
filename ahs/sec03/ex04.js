// 가장 짧은 문자거리


// 강의 풀이
function solution(s, t) {
  let answer = [];
  let p = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    }
    else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

let str = "teachermode";
console.log(solution(str, 'e')); // 1 0 1 2 1 0 1 2 2 1 0



/*
function solution(input, target) {
  let result = input.split("").fill(0).map((w, i) => {
    let distance = 1;
    if (input[i] === target) {
      return 0;
    } else if (input[i - 1] === target || input[i + 1] === target) {
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
*/