function solution(need, plan) {
  let idx = 0;
  let stack = ["C", "B", "A"];
  for (let i of plan) {
    if (i === need[idx]) {
      stack.push(i);
      idx++;
    }
  }
  return need === stack.join("") ? "YES" : "NO";
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
