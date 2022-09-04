// 후위식 연산(postfix)

function solution(input) {
    let answer = [];
    for (x of input) {
        if (!isNaN(x)) {
            answer.push(Number(x));
        } else if (answer.length > 1) {
            let rightNumber = answer.pop();
            let leftNumber = answer.pop();
            if (x === '+') answer.push(leftNumber + rightNumber);
            else if (x === '-') answer.push(leftNumber - rightNumber);
            else if (x === '*') answer.push(leftNumber * rightNumber);
            else if (x === '/') answer.push(leftNumber / rightNumber);
        }
    }
    return answer[0];
}

let input = "352+*9-"; // 3*(5+2)-9
console.log(solution(input)); // 12