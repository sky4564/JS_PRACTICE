function solution(arr) {
  const answer = arr.filter((item, index) => item > arr[index - 1]);
  // 첫 번째 수는 무조건 출력하는 것인데 한 줄로 끝낼 방법이 없을까..?
  answer.unshift(arr[0]);

  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
