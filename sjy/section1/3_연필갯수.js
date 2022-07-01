function solution(n) {
  // 사람수(n) 을 다스 수로 나눈 값을
  // Math.ceil 의 인자로 전달
  // return -> 올림한 값
  const solution = Math.ceil(n / 12);

  return solution;
}

console.log(solution(178));
