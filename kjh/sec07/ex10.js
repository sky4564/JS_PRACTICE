// 이분검색
// 숫자가 정렬된 상태에서 이분검색으로 숫자 m의 위치 검색

function binarySearch(numbers, target) {
    let answer;
    let sorted = [...numbers].sort((a, b) => a - b); // 12, 23, 32, 57, 65, 81, 87, 99
    let low = 0;
    let high = sorted.length - 1;

    while (high >= low) {
        let mid = parseInt((low + high) / 2);
        if (sorted[mid] === target) {
            answer = mid + 1;
            break;
        } 
        else if (sorted[mid] > target) high = mid - 1;
        else low = mid + 1; // sorted[mid] < target
    }
    return answer;
}

let input = [23, 87, 65, 12, 57, 32, 99, 81];
let m = 32;
console.log(solution(input, m));