function solution(s) {
  let cmp;
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  cmp = s.split("").reverse().join("");
  return s === cmp ? "YES" : "NO";
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
