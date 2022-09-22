// 재귀함수
// 1부터 n까지 출력

function solution(n) {
    function DFS(L) {
        if (L == 0) return;
        else {
          DFS(L - 1);
          console.log(L);
        }
    }
    DFS(n);
}

let input = 3;
console.log(solution(input)); // 1 2 3