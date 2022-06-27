// 중복문자제거 
// [참고링크](https://jsikim1.tistory.com/227)

function solution(input){
  // Set 활용
  let result = [...new Set(input)].join("");
  
  // filter 활용
  /*
  let result = input
    .split("")
    .filter((v, i) => input.indexOf(v) === i)
    .join("");
  */

  return result;
}

let input = "ksekkset";
console.log(solution(input)); // kset

