// 연속 부분수열 2
// 투포인터 알고리즘 참고

function solution(n, arr) {
    let answer = 0, lt = 0, sum = 0;
    for (let rt = 0; rt < arr.length; rt++) {
        sum += arr[rt];
        while (sum > n) {
            sum -= arr[lt++];
        }
        answer += (rt - lt + 1);
    }
    return answer;
}

let num = 5; // 5 이하 수열 구하기
let input = [1, 3, 1, 2, 3];
console.log( solution(num, input) ); // 10