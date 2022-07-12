function solution(a, b) {
  let answer = "";
  for (let i = 0; i < a.length; i++) {
    answer +=
      // a와 b가 동일하다면 비긴것 -> D
      a[i] === b[i]
        ? "D"
        : // a와 b가 동일하지 않다면 비교
        a[i] > b[i]
        ? // a가 b보다 크다면
          // a에서 b를 뺐을 때의 값이 2라면 b의 승리
          // (a는 보, b는 가위)
          a[i] - b[i] === 2
          ? "B"
          : // 2가 아니라면 a의 승리
            "A"
        : // b가 a보다 크다면
        // b에서 a를 뺐을 때의 값이 2라면 b의 승리
        // (b는 보, a는 가위)
        b[i] - a[i] === 2
        ? "A"
        : // 2가 아니라면 b의 승리
          "B";
  }

  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
