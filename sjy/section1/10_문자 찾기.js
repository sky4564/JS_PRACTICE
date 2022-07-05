function solution(item, text) {
  /** 변수로 정규 표현식을 생성하기 위한 방법*/
  // 1. RegExp를 생성자로 호출
  // 2. 첫 번째 인자로 변수를 넣은 템플릿 리터럴 전달
  const regex = new RegExp(`${text}`, "g");

  const answer = item.match(regex).length;

  return answer;
}

let item = "COMPUTERPROGRAMMING";
console.log(solution(item, "R"));
