// 가장 긴 문자열

function solution(words){  
    let answer = ""; 
    let max = Number.MIN_SAFE_INTEGER; // JavaScript에서 안전한 최소 정수값, -9007199254740991
    for (let w of words){
        if (w.length > max){
            max = w.length;
            answer = w;
        }
    }
    return answer;
}
let input = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(input));

