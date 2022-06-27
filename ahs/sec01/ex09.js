// A를 #으로

function solution(input){
  const result = input.split("").map(e => (e==="A") ? "#" : e);
  return result.join("");
}

let input = "BANANA";
console.log(solution(input)); // B#N#N#

