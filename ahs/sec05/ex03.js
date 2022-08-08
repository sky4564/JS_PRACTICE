// 연속 부분수열 1
function solution(n, arr) {
    let answer = 0, lt = 0, sum = 0;
    for (let rt = 0; rt < arr.length; rt++) {
        sum += arr[rt];
        if (sum === n) answer++;
        while (sum >= n) {
            sum -= arr[lt++];
            if (sum === n) answer++;
        }
    }
    return answer;
}

let num = 6;
let input = [1, 2, 1, 3, 1, 1, 1, 2];
console.log( solution(num, input) );