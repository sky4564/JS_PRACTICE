// 큰 수 출력하기
// 자신의 바로 앞 수보다 큰 수만 출력 (첫 번째 수는 무조건 출력)

function solution(input){
  let first = [input[0]];
  let mapped = input.map((v, i) => (input[i+1] > input[i]) ? input[i+1] : 0)
  let result = first.concat(mapped).filter(value => value); // 0은 falsy 값, filter 처리됨
  
  return result;
}

let input = [7, 3, 9, 5, 6, 12];
console.log(solution(input)); // 7, 9, 6, 12
// 배열 첫번째 값과 필터된 결과를 하드코딩으로 합침. 좀 더 다양한 테스트케이스로 테스트 필요..