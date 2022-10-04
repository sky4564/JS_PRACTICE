// Special Sort(구글 인터뷰)
// 음의 정수는 앞으로, 양의 정수는 뒤로, 각 정수의 순서는 그대로
// 버블정렬 응용

function specialSort(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        // 음수를 앞으로, 양수는 뒤로 정렬
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

let input = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(specialSort(input)); // -3, -2, -6, 1, 2, 3, 5, 6