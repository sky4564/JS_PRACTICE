function solution(a, b, c) {
  // a, b 비교
  // a, b 중 더 작은 수와 c 비교
  // c 보다 a나 b가 작다면 a, b 중 더 작은 수를 값으로 평가
  const answer = (a < b ? a : b) < c ? (a < b ? a : b) : c;

  return answer;
}

console.log(solution(3, 1, 9));
