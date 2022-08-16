function solution(s) {
  const dic = {};
  for (let i of s) {
    dic[i] === undefined ? (dic[i] = 1) : (dic[i] += 1);
  }
  let max = 0;
  let candidate = "";

  for (let i in dic) {
    if (dic[i] > max) {
      max = dic[i];
      candidate = i;
    }
  }
  return candidate;
}
let str = "BACBACCACCBDEDE";
console.log(solution(str));
