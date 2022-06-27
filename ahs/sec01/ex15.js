// 가운데 문자 출력
// 홀수는 가운데 문자 1개 출력, 짝수는 가운데 2개 문자 출력

function solution(input){
  let result = "";
  
  if(input.length / 2 === 2) { // 문자 길이가 짝수인 경우
    result = input.substring(input.length/2-1, input.length/2+1);
  } else { // 문자 길이가 홀수인 경우
    result = input.substring(input.length/2, input.length/2+1);
  }
  
  return result;
}

let input = "study";
console.log(solution(input)); // u

input = "good";
console.log(solution(input)); // oo

