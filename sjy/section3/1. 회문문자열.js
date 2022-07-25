function solution(input) {
  const reverseInput = input.split("").reverse().join("");

  const regex = new RegExp(`[${input}]`, "gi");

  const answer = reverseInput.match(regex) ? "YES" : "NO";

  return answer;

  /** 선생님 풀이
   * reverse 사용이 제한될 경우
   * input을 처음부터 대문자나 소문자로 전부 변환한다.
   * 변환한 문자열을 반복문을 돌려 문자열의 앞과 뒤의 인덱스를 구해 값이 동일한지 확인.
   */
}

const item = "gooG";
console.log(solution(item));
