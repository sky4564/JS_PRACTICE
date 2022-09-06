function solution(need, plan) {
  let idx = 0;
  let stack = [];
  for (let i of plan) {
    if (i === need[idx]) {
      stack.push(i);
      idx++;
    }
  }
  return a === stack.join("") ? "YES" : "NO";
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
