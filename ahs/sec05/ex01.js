// 두 배열 합치기

function solution(arr1, arr2) {
    let result = [...arr1, ...arr2].sort((a, b) => a - b);
    console.log(result);
}

let arr1 = [1, 3, 5];
let arr2 = [2, 3, 6, 7, 9];

solution(arr1, arr2);