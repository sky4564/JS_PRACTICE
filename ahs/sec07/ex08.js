// 회의실 배정
// [시작시간, 끝나는시간]
// 시작시간 <= 끝나는시간

function solution(meeting) {
    let answer = 0;
    meeting.sort((a, b) => { // 끝나는 시간 우선 정렬
        if (a[1] === b[1]) return a[0] - b[0];
        else return a[1] - b[1];
    });
    
    let et = 0;
    for (let x of meeting) {
        if (x[0] >= et) {
            answer++;
            et = x[1];
        }
    }
    return answer;
}

// 강의풀이
/*
function solution(meeting) {
  let answer = 0;
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let et = 0;
  for (let x of meeting) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }
  return answer;
}
*/

let input1 = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log("a:", solution(input1)); // 3

let input2 = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log("a:", solution(input2)); // 2
