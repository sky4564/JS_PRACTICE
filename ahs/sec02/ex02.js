// 보이는 학생

function solution(students){         
  let answer = 1, max = students[0];
  for (let i = 1; i < students.length; i++){
    if (students[i] > max){
      answer++;
      max = students[i];
    }
  }
  return answer;
}

let input = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(input)); // 5
