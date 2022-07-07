function solution(input) {
  // spread 연산자로 sprea된 결과는 값이 아닌 값들의 목록이다!
  const answer = [...new Set(input)].join("");

  return answer;
}
console.log(solution("ksekkset"));
