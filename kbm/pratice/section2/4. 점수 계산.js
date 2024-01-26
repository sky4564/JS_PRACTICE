function solution(arr) {
    let ans = 0
    let plus = 0
    for(let x of arr){
        if(x == 1){
            plus++
            ans += plus
        } else {
            plus = 0
        }
    }
    return ans
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
