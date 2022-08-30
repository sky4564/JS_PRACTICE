function solution(k, arr) {
  let pre = 0;
  let post = pre + k;
  let max = 0;
  let sum = arr.slice(pre, post).reduce((acc, cur) => acc + cur, 0);
  max = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    sum > max ? (max = sum) : null;
  }
  return max;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
