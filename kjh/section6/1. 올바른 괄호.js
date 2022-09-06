function solution(s) {
  //스택을 활용한 문제
  const stack = [];
  for (let i of s) {
    if (i === "(") {
      stack.push(i);
    } else {
      if (stack.length) {
        //절대 쌍이 맞춰질 수 없는 경우
        return "NO";
      }
      // 맞는 쌍 존재
      stack.pop();
    }
  }

  //'(' 가 아직 스택에 남아 있으면 NO
  return stack.length ? "NO" : "YES";
}

let a = "(()(()))(()";

console.log(solution(a));
