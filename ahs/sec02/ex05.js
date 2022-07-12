// 등수구하기

// 선생님 풀이
function solution(arr) {
  let n = arr.length; // n = 5
  let answer = Array.from({ length: n }, () => 1); // answer = [1, 1, 1, 1, 1]
  for (let i = 0; i < n; i++) { // i = 0 ~ 4
    for (let j = 0; j < n; j++) { // j = 0 ~ 4
      if (arr[j] > arr[i]) answer[i]++; // i번째 수 기준으로 더 큰 수가 있으면 answer++
    }
  }
  return answer;
}


function solution(grades){
  let rank = Object
    .entries(grades) // [["0", 87], ["1", 89], ["2", 92], ["3", 100], ["4", 76]]
    .sort((a, b) => b[1] - a[1]) // [["3", 100], ["2", 92], ["1", 89], ["0", 87], ["4", 76]]
    .map(x => Number(x[0]) + 1); // [4, 3, 2, 1, 5]
  
  return rank;
}

const n = 5;
const grades = [87, 89, 92, 100, 76];
console.log(solution(grades)); // [4, 3, 2, 1, 5]

