function solution(words) {
  // 초기값 설정
  let max = Number.MIN_SAFE_INTEGER;
  let answer;

  words.forEach((word) => {
    if (word.length > max) {
      max = word.length;
      answer = word;
    }
  });

  return answer;
}

let words = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(words));
