// 격자판 최대합
// 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 출력

function solution(arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length;
    
    // 각 행렬 합
    let row  = 0;
    let col = 0
    for (let i = 0; i < n; i++) {
        row = 0;
        col = 0;
        for (let j = 0; j < n; j++) {
            row += arr[i][j];
            col += arr[j][i];
        }
        answer = Math.max(answer, row, col);
    }
    
    // 좌우 대각선 합
    let leftDiagonal = 0;
    let RightDiagonal = 0;
    for (let i = 0; i < n; i++) {
        leftDiagonal += arr[i][i];
        RightDiagonal += arr[i][n - i - 1];
    }
    answer = Math.max(answer, leftDiagonal, RightDiagonal);
    return answer;
}

let input = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
];
console.log(solution(input));

/*
5
10 13 10 12 15
12 39 30 23 11
11 25 50 53 15
19 27 29 37 27
19 13 30 13 19
*/

// output : 155

