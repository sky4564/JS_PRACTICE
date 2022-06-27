// 회문 문자열
// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 함. (여기선 대소문자 구분 X)

function solution(input){
  let word = input.toLowerCase();
  let result = "";
  
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[word.length - i - 1]) {
      result = "YES";
    } else {
      return "NO";
    }
  }
  
  return result;
}

let input = "gooG";
console.log(solution(input)); // YES

