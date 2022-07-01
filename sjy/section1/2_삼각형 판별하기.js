function solution(a, b, c) {
  // 제일 큰 막대 길이 구하기
  const longest = (a > b ? a : b) > c ? (a > b ? a : b) : c;

  // 나머지 두 막대 길이의 합 구하기
  const restBar = a + b + c - longestBar;

  // 나머지 두 막대 길이의 합 보다 제일 큰 막대 길이가 짧을 경우
  // return -> "YES" / 아닐 경우 -> "NO"
  const answer = restBar > longest ? "YES" : "NO";

  return answer;
}

console.log(solution(13, 33, 17));
