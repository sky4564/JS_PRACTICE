// 장난꾸러기 현수
// 키 순으로 정렬, 현수랑 짝꿍이 자리를 바꿈

function solution(arr) {
    const compare = (arr1, arr2) => {
        let result = [];
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                result.push(i+1);
            }
        }
        return result;
    }

    // sort 함수는 배열 원본을 수정, spread 연산자로 배열 복사 이후 sort
    let sorted = [...arr].sort((a, b) => a - b);
    
    return compare(arr, sorted);
}

let input1 = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(input1)); // 3, 8 (152가 현수, 127이 짝꿍)

let input2 = [120, 130, 150, 150, 130, 150];
console.log(solution(input2)); // 3, 5 (150가 현수, 130이 짝꿍)
