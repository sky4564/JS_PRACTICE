function solution(str) {
  const answer = str.replace(/[^0-9]/g, "").replace(/^0/g, "");
  return answer;
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
