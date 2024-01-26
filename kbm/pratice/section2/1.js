function solution(arr) {
    let ans = 0
    for(let i = 0; i < arr.length; i++){        
        if(arr[i] > ans) ans = arr[i]
    }
    return ans
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
