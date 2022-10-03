// 삽입 정렬
// 앞부분에 미리 정렬된 부분과 비교하여 자신의 위치를 찾아 삽입

function insertionSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let targetIdx = 1;

    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      targetIdx = j;
      swap(arr, targetIdx + 1, targetIdx);
    }
    if (targetIdx) {
      arr[targetIdx] = currentVal;
    }
  }
  return arr;
}

let input = [11, 7, 5, 6, 10, 9];
console.log(insertionSort(input)); // 5 6 7 9 10 11
