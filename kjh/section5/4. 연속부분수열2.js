function solution(m, arr) {
  let pre = 0;
  let post = pre + 1;
  let cnt = 0;
  while (post <= arr.length) {
    let sum = arr.slice(pre, post).reduce((acc, cur) => acc + cur, 0);
    while (post <= arr.length && sum <= m) {
      cnt++;
      post++;
      sum = arr.slice(pre, post).reduce((acc, cur) => acc + cur, 0);
    }
    pre++;
    post = pre + 1;
  }
  return cnt;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
