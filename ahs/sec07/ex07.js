// 좌표 정렬
// x 좌표 먼저 정렬 이후 y 정렬

function solution(coordinate) {
    return coordinate.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    });
}

let input = [
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6]
];
console.log(solution(input));

/*
1 2
1 3
2 5
2 7
3 6
*/