function solution(arrays) {
  let answer = 0;
  /** 현재 지역 인덱스에서의 상하좌우 인덱스를 구하기 위해 가감할 숫자를 담은 배열 */
  let directX = [-1, 0, 1, 0]; // 행 => 상 하 좌 우
  let directY = [0, 1, 0, -1]; // 열 => 상 하 좌 우

  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays.length; j++) {
      // 봉우리 여부
      let peak = true;

      /** 지역의 상하좌우를 구하기 위한 반복문 
       => 변수 k는 directX/Y 배열의 인덱스를 치환하기 위한 변수 */
      for (let k = 0; k < 4; k++) {
        // 현재 지역 상, 하측 행의 인덱스
        let nextRow = i + directX[k];
        // 현재 지역 상, 하측 열의 인덱스
        let nextCol = j + directY[k];

        /** 상하좌우 인덱스가 지도 범위를 넘어가지 않을 경우에만 
            상하좌우를 검사하도록 조건을 설정 */
        if (
          nextRow >= 0 &&
          nextRow < arrays.length &&
          nextCol >= 0 &&
          nextCol < arrays.length
        ) {
          /** 지도 범위 안의 상하좌우보다 지역이 작은 경우 반복문 종료 */
          if (arrays[i][j] <= arrays[nextRow][nextCol]) {
            peak = false;
            break;
          }
        }
      }
      /** 봉우리가 맞다면 정답에 1추가 */
      if (peak) {
        answer += 1;
      }
    }
  }

  return answer;
}

let arrays = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arrays));
