// 연필개수
// n명의 학생에게 연필을 각 1개씩 주기 위한 다스 수 구하기 (연필 1 다스 = 12)

function solution(n) {
  const DOZEN = 12;
  const extra = (n % DOZEN > 0) ? 1 : 0;
  const result = n / DOZEN + extra;
  return Math.floor(result);
}

console.log(solution(25)); // 3
console.log(solution(178)); // 15
