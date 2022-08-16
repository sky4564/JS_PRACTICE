function solution(str1, str2) {
  dic1 = {};
  dic2 = {};
  for (let i of str1) {
    dic1[i] === undefined ? (dic1[i] = 1) : (dic1[i] += 1);
  }
  for (let i of str2) {
    dic2[i] === undefined ? (dic2[i] = 1) : (dic2[i] += 1);
  }
  for (let i in dic1) {
    if (dic1[i] !== dic2[i]) {
      return "NO";
    }
  }
  return "YES";
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
