function solution(s) {
  const answer = "YES";
  const filteredInput = s.toLowerCase().replace(/[^a-z]/g, "");
  const inputLength = Math.floor(filteredInput.length / 2);

  for (let i = 0; i < inputLength; i++) {
    if (filteredInput[i] !== filteredInput[filteredInput.length - 1 - i]) {
      return "NO";
    }
  }

  /** reverse를 사용한 풀이 */
  //   const reverseInput = filteredInput.split("").reverse().join("");
  //   const answer = reverseInput === filteredInput ? "YES" : "NO";

  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
