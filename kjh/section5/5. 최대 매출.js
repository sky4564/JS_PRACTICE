function solution(k, arr) {
  let pre = 0;
  let post = pre + k;
  let max = 0;
  while (post <= arr.length) {
    const sum = arr.slice(pre, post).reduce((acc, cur) => acc + cur, 0);
    sum > max ? (max = sum) : null;
    pre++;
    post++;
  }
  return max;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
