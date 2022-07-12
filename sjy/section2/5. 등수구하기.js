function solution(arr) {
  let answer = arr.map((item) => 1);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) answer[i] += 1;
    }
  }
  return answer.join("");
}
let arr = [92, 80, 72, 100, 76];
console.log(solution(arr));
