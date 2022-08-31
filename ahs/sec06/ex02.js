// 괄호문자제거
// 소괄호 () 사이에 있는 모든 문자 모두 제거

function solution(word) {
    let answer = [];

    for(w of word) {
        if (w === "(" || /[a-zA-Z]/g.test(w)) { // "(" 이거나 문자열인 경우
            answer.push(w);
        } else { // ")" 인 경우
            while (answer.pop() !== "(");
        } 
    }

    return answer.join("");
}

let input = "(A(BC)D)EF(G(H)(IJ)K)LM(N)" // EFLM
console.log(solution(input));
