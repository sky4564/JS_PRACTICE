// 버블 정렬
// 가장 큰 값이 버블처럼 위로 올라가는 모양
// 참고링크 : https://velog.io/@young_mason/Algorithm-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Sorting-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-Basic%ED%8E%B8#1-%EB%B2%84%EB%B8%94-%EC%A0%95%EB%A0%AC-bubble-sort

/*
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
*/

// 강의풀이
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) { // 마지막은 숫자 하나만 남으므로 비교할 필요 없음.
    for (let j = 0; j < arr.length - i - 1; j++) { 
      if (arr[j] > arr[j + 1]) { // j랑 j+1 계속 비교 -> 가장 큰 값 가장 마지막으로 이동.
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

let input = [13, 5, 11, 7, 23, 15];
console.log(solution(input)); // 5, 7, 11, 13, 15, 23
