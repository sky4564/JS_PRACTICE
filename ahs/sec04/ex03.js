/*
 멘토링
 n은 반 학생의 수, m은 테스트 횟수 (ex. 3 4 1 2 => 3번 학생 1등, 4번 학생 2등, ...)  
 멘토가 가능한 경우는 3번 학생이 모든 테스트에서 해당 학생보다 등수가 앞서야 한다.
*/

function solution(n, m, input){
  let grades = input;
  let answer = 0;

  for (let i = 1; i <= n; i++){
    for (let j = 1; j <= n; j++){
      let count = 0;
      
      for (let k = 0; k < m; k++){
        let pi = 0;
        let pj = 0;
        
        for (let s = 0; s < n; s++){
          if (grades[k][s] === i) pi = s;
          if (grades[k][s] === j) pj = s;
        }
        
        if (pi < pj) count++;
      }
      
      if (count === m) answer++;
    }
  }
  
  return answer;
}

let n = 4, m = 3;
let input = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(n, m, input)); // 3

