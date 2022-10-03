// 연속 부분수열 1
// 투포인터 알고리즘 참고
// 1. 먼저 rt를 계속 더하면서 값들을 sum에 합함
// 2. sum 값이 target 값과 같은 경우 answer++
// 3. sum >= target 이면 sum에서 lt값 빼고 lt++
// -> lt값 빼고 나서도 sum === target인지 체크 필요

function solution(target, arr) {
    let answer = 0, lt = 0, sum = 0;
    for (let rt = 0; rt < arr.length; rt++) {
        sum += arr[rt];
        if (sum === target) answer++;
        while (sum >= target) {
            sum -= arr[lt++]; // sum에서 lt값 빼고 lt++
            if (sum === target) answer++;
        }
    }
    return answer;
}

let num = 6; // 6과 같은 수열 구하기
let input = [1, 2, 1, 3, 1, 1, 1, 2];
console.log( solution(num, input) ); // {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}