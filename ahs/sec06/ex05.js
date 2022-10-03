// 쇠막대기

function solution(s) {
    let answer = 0;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "(") stack.push("(");
      else {
        stack.pop();
        if (s[i - 1] === "(") answer += stack.length;
        else answer++;
        // stack.pop(); // 이 위치에 하면 레이저까지 카운팅한다.
      }
    }
    return answer;
}

/*
// 정호님 풀이
function solution(input){
  let stick = input;
  let stack = 0;
  let result = 0;
  for(let i in stick){
      stick[i] === '(' ? stack++ : stick[i-1] === '(' ?  (result += --stack) : (--stack)+1 && result++;
  }
  return result;
}
*/

let input1 = "()(((()())(())()))(())";
console.log(solution(input1)); // 17

let input2 = "(((()(()()))(())()))(()())";
console.log(solution(input2)); // 24