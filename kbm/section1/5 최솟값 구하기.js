function solution(arr){         
    // 내장함수사용
    
    // arr.sort()
    // answer = arr[0]
    // return answer;

    // 전개연산자랑 Math 내장함수 사용 
    let ans
    ans = Math.min(...arr)
    // - > min 는 최소값
    ans = Math.max(...arr)
    // - > max 는 최대값
    return ans


    //나의풀이 내장함수 사용 x 
    // let ans
    // let min = arr[0]

    // for(let i = 1; i < arr.length; i++){
    //     if(arr[i] < min) min = arr[i]
    // }
    // ans = min
    // return ans

}
let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));