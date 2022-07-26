function solution(s, t) {
  const answer = [];

  let p = 1000;

  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }

  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
    } else {
      p++;
      // Math.min의 첫 번째 인자인 answer[i] ==> t 값이 왼쪽에서부터 떨어져있는 거리
      // 왼쪽에서부터 t값과 떨어진 거리와 오른쪽에서부터 떨어진 값 중 작은 값을 대입
      answer[i] = Math.min(answer[i], p);
    }
  }

  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
