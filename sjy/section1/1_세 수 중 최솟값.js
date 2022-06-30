function solution(a, b, c) {
  // a, b 비교
  // a, b 중 더 작은 수와 c 비교
  // c 보다 a나 b가 작다면 a, b 중 더 큰 수 다음으로 c를 정렬
  const answer = (a < b ? a : b) < c ? (a < b ? a : b) : c;

  return answer;
}

console.log(solution(3, 1, 9));
