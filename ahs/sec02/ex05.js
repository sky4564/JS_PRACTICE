// 등수구하기

function solution(grades){
  let rank = Object
    .entries(grades)
    .sort((a, b) => b[1] - a[1])
    .map(x => Number(x[0]) + 1);
  
  return rank;
}

const n = 5;
const grades = [87, 89, 92, 100, 76];
console.log(solution(grades)); // [4, 3, 2, 1, 5]

