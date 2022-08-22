// 공통원소 구하기

function solution(arr1, arr2) {
    let result =  arr1
        .filter(element => arr2.includes(element)) 
        .sort((a, b) => a - b);

    console.log(result);
}

let arr1 = [1, 3, 9, 5, 2];
let arr2 = [3, 2, 5, 7, 8];

solution(arr1, arr2);