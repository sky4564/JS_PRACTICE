// 재귀함수를 이용한 이진수 출력

function solution(num) {
    console.log(1);
    function convertToBinary(L) {
        if (L <= 2) return;
        else {
            convertToBinary(L / 2);
            console.log(Math.floor(L % 2));
        }
    }
    convertToBinary(num);
}

let input = 15;
console.log(solution(input));