function solution(arrays) {
  let answer;
  let maxRow;
  let maxCol;
  for (let i = 0; i < arrays.length; i++) {
    maxRow = 0;
    maxCol = 0;
    for (let j = 0; j < arrays.length; j++) {
      maxRow += arr[i][j];
      maxCol += arr[j][i];
    }
    // 이 자리에서 초기화 하는 이유
    // Math.max에 초기값을 전달하는 이유
    answer = Math.max(answer, maxRow, maxCol);
  }

  const maxLeftDiagonal = arrays
    .map((arr, index) => arr[index])
    .reduce((pre, cur) => pre + cur, 0);

  const maxRightDiagonal = arrays
    .map((arr, index) => arr[arr.length - index - 1])
    .reduce((pre, cur) => pre + cur, 0);

  answer = Math.max(answer, maxLeftDiagonal, maxRightDiagonal);

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
