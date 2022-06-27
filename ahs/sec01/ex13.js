// 대소문자 변환

function solution(input){
  const upper = /[A-Z]/g;
  
  const result = input
    .split("")
    .map(e => e.match(upper) ? e.toLowerCase() : e.toUpperCase())
    .join("");
  
  return result;
}

const input = "StuDY";
console.log(solution(input)); // sTUdy

