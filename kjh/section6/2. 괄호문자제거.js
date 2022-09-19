function solution2(s) {
  const answer = [];
  let flag = 0;

  for (let i of s) {
    if (i === "(") {
      flag++;
      continue;
    }
    if (i === ")") {
      flag--;
      continue;
    }
    // 문자 모두 제거
    if (flag) continue;
    answer.push(i);
  }
  return answer.join("");
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution2(str));
