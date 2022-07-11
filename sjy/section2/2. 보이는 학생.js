function solution(arr) {
  let answer = 1;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    // 현재 최대값(현재 가장 큰 학생의 키)보다 학생의 키가 크다면
    // 학생의 키를 최대값으로 재할당하고
    // 선생님이 볼 수 있는 학생 수를 추가한다.
    if (max < arr[i]) {
      max = arr[i];
      answer++;
    }
  }
  return answer;
}
let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
