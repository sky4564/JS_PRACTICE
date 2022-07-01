function solution(arr) {
  // filter 메서드에 홀수값만을 반환하는 콜백 전달
  // return ==> 홀수 원소만을 가진 배열
  const oddArray = arr.filter((item) => item % 2);

  // reduce 메서드에 배열의 값을 합하는 콜백 전달
  // return ==> 홀수 값의 총 합
  const total = oddArray.reduce((acc, item) => acc + item, 0);

  // Math.min 메서드에 배열의 원소들을 분해하여 전달
  // return ==> 홀수 값의 최소값
  const minNumber = Math.min(...oddArray);

  return `${total} 
  ${minNumber}`;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
