// 최대매출
// 연속된 n일 동안 최대 매출액이 얼마인지 구하기
// 슬라이딩 윈도우 알고리즘 참고

function solution(sales) {
    let answer = 0;
    for (let i = 0; i < sales.length; i++) {
        let sum = sales[i] + sales[i+1] + sales[i+2];
        console.log(sales[i], sales[i+1], sales[i+2]);
        answer = (sum > answer) ? sum : answer;
    }
    return answer;
}

// 강의풀이
/*
function solution(arr, k) {
  let answer, sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}
*/

let input = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

console.log(solution(input)); // 56 (11, 20, 25)