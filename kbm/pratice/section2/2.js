function solution(arr) {
    let cnt = 0 
    let flag = 0
    for(let x of arr) {
        console.log(x)
        if(x > flag) {
            flag = x
            cnt++
        }
    }
    return cnt
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
