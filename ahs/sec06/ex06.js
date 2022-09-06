// 공주 구하기

function solution(n, k) {
    let answer;
    let queue = Array.from({ length: n }, (v, i) => i + 1);
    while (queue.length) {
        for (let i = 1; i < k; i++) queue.push(queue.shift()); // k=3, 원형 큐 가장 앞 쪽 값을 가장 뒷 쪽으로. 
        queue.shift(); // 타겟인 3번째 숫자가 가장 앞으로 오게 됨 -> shift()
        if (queue.length === 1) answer = queue.shift(); // 마지막 남은 값이 정답
    }
    return answer;
}

let n = 8;
let k = 3;
console.log(solution(n, k)); // 7
