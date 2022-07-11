function solution(a, b) {
  let answer = "";
  for (let i = 0; i < a.length; i++) {
    answer +=
      a[i] === b[i]
        ? "D"
        : a[i] > b[i]
        ? a[i] - b[i] === 2
          ? "B"
          : "A"
        : b[i] - a[i] === 2
        ? "A"
        : "B";
  }

  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
