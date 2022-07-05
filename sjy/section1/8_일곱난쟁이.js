function solution(arr) {
  let sum = arr.reduce((acc, item) => acc + item, 0);
  let answer = arr;

  /** 선생님 풀이 */
  // 9난쟁이의 총 합을 구하고
  // 9난쟁이의 총 합에서 두 난쟁이의 값을 뺐을 때 그 값이 100인 경우를 구한다.

  /** 부족했던 점 */
  // 우선 총 합을 구한 후에 해당 값에서 어떤 값들(예외)을 뺄 경우
  // 원하는 값을 구할 수 있는 방향을 생각하지 못했다.
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        // i번째 원소를 먼저 제거할 경우 -> j번째 원소가 i번쨰 원소의 인덱스로 당겨진다.
        // -> j번째 원소를 제거한 후 i번째 원소를 제거해야 한다
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }

  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
