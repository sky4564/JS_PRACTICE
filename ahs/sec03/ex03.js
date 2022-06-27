// 숫자만 추출

function solution(input){
  let words = input;
  let filtered = [...input].filter( (w, i) => {
    return (words.charCodeAt(i) >= 48 && words.charCodeAt(i) <= 57);
  }).join("");
  
  return Number(filtered);
}

let input = "g0en2T0s8eSoft";
console.log(solution(input)); // 208

