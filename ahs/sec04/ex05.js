// K번째 큰 수

function solution(n, k, cards) {
  let tmp = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        tmp.push(cards[i] + cards[j] + cards[k]);
      }
    }
  }

  let resultSet = new Set(tmp.sort((a, b) => b - a));
  let arr = Array.from(resultSet);

  return arr[k - 1]; // 143
}

let cards = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, cards));
