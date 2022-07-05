function solution(input) {
  const answer = input
    .split("")
    .map((e) => (e.match(/[A-Z]/g) ? e.toLowerCase() : e.toUpperCase()))
    .join("");

  return answer;
}

console.log(solution("StuDY"));
