// Least Recently Used(카카오 캐시 문제 변형)
// cache miss : cache에 작업이 없는 경우, 큐에 추가 후 마지막 값 삭제
// cache hit : cache에 작업이 있는 경우, 큐 가장 앞으로

function solution(size, task) {
    const miss = (x, queue) => {
        queue.unshift(x);
        queue.pop();
    };

    const hit = (x, queue) => {
        let index = queue.indexOf(x);
        let target = queue.splice(index, 1);
        queue.unshift(target[0]);
    }

    let status = Array(size).fill(0);

    for (let t of task) {
        console.log(t);
        if (status.includes(t)) {
            hit(t, status);
            console.log("hit", status);
        } else {
            miss(t, status);
            console.log("miss", status);
        }
    }

    return status;
}

let input = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, input)); // 7 5 3 2 6
