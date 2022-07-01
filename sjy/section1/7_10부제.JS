function solution(day, carList) {
  // carNumber % 10 으로  자동차 번호 마지막 숫자 구하기
  // return ==> 번호 마지막 숫자들을 원소로 가진 배열
  const lastCarNumberList = carList.map((carNumber) => carNumber % 10);

  // 마지막 숫자와 day가 동일한 원소를 값으로 가진 배열의 length값 구하기
  const answer = lastCarNumberList.filter(
    (lastNumber) => lastNumber === day
  ).length;

  return answer;
}

const carList = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(0, carList));
