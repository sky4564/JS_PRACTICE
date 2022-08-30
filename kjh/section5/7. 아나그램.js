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
// function solution(str1, str2){
//     let answer="YES";
//     let sH = new Map();
//     for(let x of str1){
//         if(sH.has(x)) sH.set(x, sH.get(x)+1);
//         else sH.set(x, 1);
//     }
//     for(let x of str2){
//         if(!sH.has(x) || sH.get(x)==0) return "NO";
//         sH.set(x, sH.get(x)-1);
//     }
//     return answer;
// }

// let a="AbaAeCe";
// let b="baeeACA";
// console.log(solution(a, b));
