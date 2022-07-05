function solution(stringItem) {
  // replace 메서드의 첫 번째 인자로 찾고자 하는 값을 전달시
  // string의 모든 첫 번째 인자에 해당하는 값을 바꾸고 싶다면
  // 첫 번째 인자로 전달한 정규표현식에 g옵션을 설정하여 찾고자 하는 값의 전체를 설정한다.
  const answer = stringItem.replace(/A/g, "#");

  return answer;
}

let str = "BANANA";
console.log(solution(str));
