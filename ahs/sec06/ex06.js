// 공주 구하기

function solution(n, k) {
    let answer;
    let queue = Array.from({ length: n }, (v, i) => i + 1);
    while (queue.length) {
        for (let i = 1; i < k; i++) queue.push(queue.shift());
        queue.shift();
        if (queue.length === 1) answer = queue.shift();
    }
    return answer;
}

let n = 8;
let k = 3;
console.log(solution(n, k)); // 7
