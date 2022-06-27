// 유효한 팰린드롬
// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 함. (여기선 대소문자 구분 X, 알파벳만 가지고 회문을 검사)

function solution(input){
  let word = input.toLowerCase();
  let filtered = [...word].filter( (w, i) => {
    return (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122);
  });

  let result = "";
  
  for (let i = 0; i < filtered.length; i++) {
    if (filtered[i] === filtered[filtered.length - i - 1]) {
      result = "YES";
    } else {
      return "NO";
    }
  }
  
  return result;
}

let input = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(input)); // YES
