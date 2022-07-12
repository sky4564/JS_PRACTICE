function solution(arr) {
  // 정답
  let answer = 0;
  // 점수
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      // 정답이라면 점수에 1추가한다
      // 추가된 점수를 정답에 더한다
      count++;
      answer += count;
    } else {
      // 정답이 아니라면 점수를 0으로 초기화한다
      count = 0;
    }
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
