// 내풀이
function solution1(str) {
  str = str.toLowerCase().replace(/[a-z]/g, "").replace(0, "");
  return str;
}

// 선생님풀이  parseInt 사용
function solution2(str) {
  let ans = "";
  for (let x of str) {
    if (!isNaN(x)) ans += x;
  }
  return parseInt(ans);
}

// 선생님 풀이 parseInt 사용안하고  ~
function solution3(str) {
  let ans = 0;
  for (let x of str) {
    if (!isNaN(x)) ans = ans * 10 + Number(x);
  }
  return ans;
}

let str = "g0en2T0s8eSoft";
console.log(solution1(str));
console.log(solution2(str));
console.log(solution3(str));
