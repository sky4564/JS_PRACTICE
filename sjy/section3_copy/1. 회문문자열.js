function solution(s) {
  let answer = "YES";
  const lowerCase = s.toLowerCase();

  for (let i = 0; i < s.length / 2; i++) {
    if (lowerCase[i] !== lowerCase[lowerCase.length - 1 - i]) {
      return "NO";
    }
  }

  return answer;

  // reverse 메서드 사용시
  // let answer;

  // const lowerItem = s.toLowerCase();
  // const reverseItem = lowerItem.split("").reverse().join("");

  // lowerItem === reverseItem ? (answer = "Yes") : (answer = "No");

  // return answer;
}

const input = "gooG";

console.log(solution(input));
