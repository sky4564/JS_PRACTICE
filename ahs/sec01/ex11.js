// 대문자 찾기

function solution(input){
  const result = input.split("").filter((element, i) => {
    if(input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) {
      return input[i];
    }
  });
  
  return result.length;
}

// input = "KoreaTimeGood"
// find uppercase
let input = "KoreaTimeGood";
console.log(solution(input)); // 3

