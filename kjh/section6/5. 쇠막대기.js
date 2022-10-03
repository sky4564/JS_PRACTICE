function solution(s) {
  s = s.split();
  let stick = s.shift();
  let stack = 0;
  let result = 0;
  for (let i in stick) {
    stick[i] === "("
      ? stack++
      : stick[i - 1] === "("
      ? (result += --stack)
      : --stack + 1 && result++;
  }
  return result;
}

let a = "()(((()())(())()))(())";
console.log(solution(a));
