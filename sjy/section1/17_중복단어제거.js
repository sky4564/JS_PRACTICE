function solution(list) {
  const answer = [...new Set(list)].join(",");

  return answer;
}
let list = ["good", "time", "good", "time", "student"];
console.log(solution(list));
