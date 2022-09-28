// 결혼식
// 오는 시간, 가는 시간
// 동시에 존재하는 최대 인원 구하기
// 타임라인을 만들어 오는 시간 s 이면 ++, 가는 시간 e 이면 --

function solution(times) {
    let answer = Number.MIN_SAFE_INTEGER;
    let T_line = [];
    for (let x of times) {
        T_line.push([x[0], 's']);
        T_line.push([x[1], 'e']);
    }
    T_line.sort((a, b) => {
        if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
        else return a[0] - b[0];
    });
    console.log(T_line);
    let cnt = 0;
    for (let x of T_line) {
        if (x[1] === 's') cnt++;
        else cnt--;
        answer = Math.max(answer, cnt);
    }
    return answer;
}

let input = [
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14]
];
console.log(solution(input));