function solution(a, b) {
  //그림은 하나만 터지고 설명은 두개 다??
  let cnt = 0;
  const stack = [];
  while (b.length) {
    const mv = +b.shift() - 1;
    // 이쪽 forEach로 하는 게 더 깔끔
    for (let i of a) {
      if (i[mv]) {
        // 0이 아닐 경우
        if (i[mv] === stack[stack.length - 1]) {
          stack.pop();
          i[mv] = 0;
          cnt += 2;
          break;
        }
        stack.push(i[mv]);
        i[mv] = 0;
        break;
      }
    }
  }
  return cnt;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
