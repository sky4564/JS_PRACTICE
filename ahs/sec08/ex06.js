// 바둑이 승차

function solution(c, arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length; 
    function DFS(L, sum) {
        if (sum > c) return;
        if (L === n) {
            answer = Math.max(answer, sum);
        }
        else {
            DFS(L + 1, sum + arr[L]);
            DFS(L + 1, sum);
        }
    }
    DFS(0, 0);
    return answer;
}

let C = 259;
let input = [81, 58, 42, 33, 61];
console.log(solution(C, input)); // 242