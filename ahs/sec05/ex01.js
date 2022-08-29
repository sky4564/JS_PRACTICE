// 두 배열 합치기
// sort 함수는 기본적으로 O(n log n) 의 시간복잡도를 갖고 있음.
// 투포인터 알고리즘을 통해 이번 문제를 O(n + m)으로 줄일 수 있다.
// arr1[p1] <= arr2[p2]

function solution(arr1, arr2) {
    let answer = [];
    let n = arr1.length;
    let m = arr2.length;
    let p1 = (p2 = 0);
    while (p1 < n && p2 < m) {
        if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
        else answer.push(arr2[p2++]);
    }
    // 비교가 끝나고 남은 값 그대로 추가
    while (p1 < n) answer.push(arr1[p1++]);
    while (p2 < m) answer.push(arr2[p2++]);
    return answer;
}

/*
function solution(arr1, arr2) {
    let result = [...arr1, ...arr2].sort((a, b) => a - b);
    return result;
}
*/

let arr1 = [1, 3, 5];
let arr2 = [2, 3, 6, 7, 9];

console.log(solution(arr1, arr2));