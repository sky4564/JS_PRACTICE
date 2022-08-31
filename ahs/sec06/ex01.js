// 올바른 괄호
// 괄호 짝이 올바르게 있는지 판별

function solution(brackets) {
    let answer = [];

    for (b of brackets) {
        if (b === "(") {
            answer.push(b);
        } else {
            answer.pop();
        }
    }

    return (answer.length === 0) ? "YES" : "NO";
}

let input1 = "(())()"; // YES
let input2 = "(()(()))(()"; // NO
console.log(solution(input1));
console.log(solution(input2));