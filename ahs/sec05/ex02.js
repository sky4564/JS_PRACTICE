// 공통원소 구하기

function solution(arr1, arr2){
    let answer = [];
    arr1.sort((a, b) => a - b); // [1, 2, 3, 5, 9]
    arr2.sort((a, b) => a - b); // [2, 3, 5, 7, 8]
    let p1 = (p2 = 0);
    while (p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1] == arr2[p2]) { // 공통원소 찾으면 p1, p2 모두 ++
            answer.push(arr1[p1++]);
            p2++; 
        } 
        else if (arr1[p1] < arr2[p2]) p1++; // p1 값 작으면 p1++
        else p2++; // p2 값 작으면 p2++
    }
    return answer;
}

/*
function solution(arr1, arr2) {
    let result =  arr1
        .filter(element => arr2.includes(element)) 
        .sort((a, b) => a - b);

    return result;
}
*/

let arr1 = [1, 3, 9, 5, 2];
let arr2 = [3, 2, 5, 7, 8];

console.log(solution(arr1, arr2));