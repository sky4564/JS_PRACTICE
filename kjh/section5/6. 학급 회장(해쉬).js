function solution(s) {
  const dic = new Map();
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

// function solution(s){
//     let answer;
//     let sH = new Map();
//     for(let x of s){
//         if(sH.has(x)) sH.set(x, sH.get(x)+1);
//         else sH.set(x, 1);
//     }
//     let max=Number.MIN_SAFE_INTEGER;
//     for(let [key, val] of sH){
//         if(val>max){
//             max=val;
//             answer=key;
//         }
//     }
//     return answer;
// }

// let str="BACBACCACCBDEDE";
// console.log(solution(str));
