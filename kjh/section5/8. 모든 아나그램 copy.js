// function compareMaps(map1, map2) {
//     if (map1.size !== map2.size) return false;
//     for (let [key, val] of map1) {
//       if (!map2.has(key) || map2.get(key) !== val) return false;
//     }
//     return true;
//   }
//   function solution(s, t) {
//     let answer = 0;
//     let tH = new Map();
//     let sH = new Map();
//     for (let x of t) {
//       if (tH.has(x)) tH.set(x, tH.get(x) + 1);
//       else tH.set(x, 1);
//     }
//     let len = t.length - 1;
//     for (let i = 0; i < len; i++) {
//       if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
//       else sH.set(s[i], 1);
//     }
//     let lt = 0;
//     for (let rt = len; rt < s.length; rt++) {
//       if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
//       else sH.set(s[rt], 1);
//       if (compareMaps(sH, tH)) answer++;
//       sH.set(s[lt], sH.get(s[lt]) - 1);
//       if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
//       lt++;
//     }
//     return answer;
//   }
function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}

function solution(s, t) {
  const m1 = new Map();
  const m2 = new Map();
  const len = t.length;
  let answer = 0;
  for (let i of t) {
    m2.has(i) ? m2.set(i, m2.get(i) + 1) : m2.set(i, 1);
  }
  for (let i = 0; i < len - 1; i++) {
    m1.has(i) ? m1.set(i, m1.get(i) + 1) : m1.set(i, 1);
  }
  console.log(m1, m2);
  let lf = 0;
  for (let rt = len; rt < s.length; rt++) {
    if (m1.has(s[rt])) m1.set(s[rt], m1.get(s[rt]) + 1);
    else m1.set(s[rt], 1);
    if (compareMaps(m1, m2)) answer++;
    m1.set(s[lf], m1.get(s[lf]) - 1);
    if (m1.get(s[lf]) === 0) m1.delete(s[lf]);
    lf++;
  }
  return answer;
}
let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
