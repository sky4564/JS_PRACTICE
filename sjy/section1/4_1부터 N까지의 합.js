function solution(n) {
  // 인자(n) 만큼 반복
  // 반복시 i에 1씩 더하기
  // 총 합(answer)에 반복문이 돌아갈 당시의 i값 더하기
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
  }
  return answer;
}

console.log(solution(6));
