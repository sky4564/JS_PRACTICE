// 선택 정렬
// 1. 가장 작은 값을 탐색
// 2. 가장 앞 부분으로 swap
// 참고링크 : https://velog.io/@young_mason/Algorithm-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Sorting-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-Basic%ED%8E%B8#1-%EB%B2%84%EB%B8%94-%EC%A0%95%EB%A0%AC-bubble-sort

/*
function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    let min = 0;
    
    for (let i = 0; i < arr.length; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }

        if (arr[min] !== arr[i]) {
            swap(arr, i, min);
         }
     }
    
    return arr;
}
*/

// 강의풀이
function solution(arr) {
  let answer = arr;  // 얕은 복사
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j; // 가장 작은 수의 idx 저장
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]]; // swap, 가장 작은 수(idx) 가장 앞(i)으로
  }
  return answer;
}

let input = [13, 5, 11, 7, 23, 15];
console.log(solution(input)); // 5, 7, 11, 13, 15, 23