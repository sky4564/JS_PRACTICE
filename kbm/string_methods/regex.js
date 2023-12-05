//근데 대소문자 구분 등 정규표현식을 쓰면 
// 좀더 문자열을 쉽게 변환 할 수 있음
// regex = regular expression
function solution(s) {
    let ans = s
    let regex = /A/gi
    ans = ans.replace(regex,'#')
    return ans
}

let str = "BANANAaaa";
console.log(solution(str));
