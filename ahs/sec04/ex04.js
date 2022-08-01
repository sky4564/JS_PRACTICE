// 졸업 선물
// 1. 할인을 어느 선물에 적용할지 정하기
// 2. 최대 몇 명 학생의 선물을 살 수 있는지 찾기

function solution(students, budget, list){
  // 1.
  // 기존 가격 : [12, 4, 7, 9, 13] 
  // 할인 가격 : [9, 3, 5, 7, 8] 
  let diff = list.map(element => (element[0] + element[1]) - (element[0] / 2 + element[1])); // [3, 1, 2, 2, 5]
  let targetIndex = diff.indexOf(Math.max(...diff)); // 4번 할인율이 가장 큼 (10, 3)

  // 2.
  let count = 0;
  let result = list
    .map((element, i) => (i === targetIndex) ? element[0] / 2 + element[1] : element[0] + element[1]) // [12, 4, 7, 9, 8]
    .sort((a, b) => a - b) // [4, 7, 8, 9, 12]
    .reduce((acc, cur, idx) => ((acc < budget) ? count++ : 0), 0);
  return result;
}

let students = 5; // 학생 수
let budget = 28; // 예산
let list = [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]]; // 앞에는 가격, 뒤에는 배송비
console.log(solution(students, budget, list)); // 4
