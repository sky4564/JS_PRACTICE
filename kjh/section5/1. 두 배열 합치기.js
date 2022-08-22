// function solution(arr1, arr2) {
//   let answer = [];
//   let n = arr1.length;
//   let m = arr2.length;
//   let p1 = (p2 = 0);
//   while (p1 < n && p2 < m) {
//     if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
//     else answer.push(arr2[p2++]);
//   }
//   while (p1 < n) answer.push(arr1[p1++]);
//   while (p2 < m) answer.push(arr2[p2++]);
//   return answer;
// }

// let a = [1, 3, 5];
// let b = [2, 3, 6, 7, 9];
// console.log(solution(a, b));
function solution(arr1, arr2) {
  let result = [];
  arr1[0] > arr2[0] ? ([arr1, arr2] = [arr2, arr1]) : null;
  while (arr1.length && arr2.length) {
    // 한 쪽 배열이 모두 소진될 때까지 반복
    while (arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    }
    while (arr2[0] <= arr1[0]) {
      result.push(arr2.shift());
    }
  }
  //남아 있는 배열을 결과 배열 뒤에 연결
  if (arr1.length) {
    result = result.concat(arr1);
  } else {
    result = result.concat(arr2);
  }
  const answer = result.join(" ");
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
