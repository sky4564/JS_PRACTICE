// 재귀함수를 이용한 이진수 출력

function solution(num) {
    console.log(1);
    function convertToBinary(L) {
        if (L <= 2) return;
        else {
            convertToBinary(L / 2);
            console.log(Math.floor(L % 2));
        }
    }
    convertToBinary(num);
}

/*
// 강의풀이
function solution(n) {
    let answer = "";
    function DFS(n) {
        if (n === 0) return;
        else {
            DFS(parseInt(n / 2));
            answer += String(n % 2);
        }
    }
    DFS(n);
    return answer;
}
*/
console.log(solution(11));