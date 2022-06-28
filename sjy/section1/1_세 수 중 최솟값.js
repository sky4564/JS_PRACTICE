function solution(a, b, c) {
  // a, b 비교

  const answer = (a < b ? a : b) < c ? (a < b ? a : b) : c;

  return answer;
}

console.log(solution(3, 1, 9));
