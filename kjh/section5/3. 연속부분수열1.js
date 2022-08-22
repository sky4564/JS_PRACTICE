function solution(m, arr) {
  let pre = 0;
  let post = 1;
  let cnt = 0;
  while (post <= arr.length) {
    const sum = arr.slice(pre, post).reduce((acc, cur) => acc + cur, 0);
    if (sum === m) {
      cnt++;
      post++;
    } else if (sum < m) {
      post++;
    } else {
      pre++;
    }
  }
  return cnt;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
