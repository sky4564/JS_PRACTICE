// 결혼식
// 오는 시간, 가는 시간
// 동시에 존재하는 최대 인원 구하기

function solution(times) {
    let sorted = [...times].sort((a, b) => a[0] - b[0]);
    console.log(sorted);

}

let input = [
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14]
];
console.log(solution(input));