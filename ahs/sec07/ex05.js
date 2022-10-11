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
        if (status.includes(t)) {
            hit(t, status);
            console.log(t, "hit", status);
        } else {
            miss(t, status);
            console.log(t, "miss", status);
        }
    }

    return status;
}

// 강의풀이
/*
function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });

  return answer;
}
*/

let input = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, input)); // 7 5 3 2 6
