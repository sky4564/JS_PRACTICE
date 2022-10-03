// 합이 같은 부분집합

function solution(arr) {
    let answer = "NO", flag = 0;
    let total = arr.reduce((a, b) => a + b, 0); // 32
    let n = arr.length; // 6
    function DFS(L, sum) {
        if (flag) return;
        if (L === n) {
            if ((total - sum) === sum) {
                answer = "YES";
                flag = 1;
            }
        }
        else {
            DFS(L + 1, sum + arr[L]);
            DFS(L + 1, sum);
        }
    }
    DFS(0, 0);
    return answer;
}

let input = [1, 3, 5, 6, 7, 10];
console.log(solution(input)); // "YES"