
// 문자열을 읽으면서 해당 문자열을 리턴
// for(x of str) 써두 돼
// function solution(s) {
//     let ans = ''
//     for (let i = 0; i < s.length; i++) {        
//         console.log(s[i]);
//         if (s[i] == "A") {
//         ans += "x";
//         } else ans += s[i];
//     }
//     return ans;
// }


//근데 대소문자 구분 등 정규표현식을 쓰면 
// 좀더 문자열을 쉽게 변환 할 수 있음
function solution(s) {
    let ans = s
    let regx = /A/gi
    ans = ans.replace(regx,'#')
    return ans
}

let str = "BANANAaaa";
console.log(solution(str));
