// 점수계산 (OX퀴즈에서 정답을 맞추면 1점, 연속으로 맞출수록 +1점)

function solution(n, ox){
  // map => [1, 0, 1, 2, 3, 0, 0, 1, 2, 0]
  // reduce => 10
  let result = ox
    .map((value, i) => (i > 0 && (ox[i-1] != 0 && ox[i] == 1)) ? ox[i] = ox[i-1] + ox[i] : ox[i])
    .reduce((x, y) => x + y, 0);
  
  return result;
}

const n = 10;
const ox = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(n, ox));

