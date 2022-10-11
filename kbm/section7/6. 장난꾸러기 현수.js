function solution(arr)  {
    let ans = []
    
    let sortArr = arr.slice()
    sortArr.sort((a,b)=>a-b)

    for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i] !== sortArr[i]) ans.push(i+1)
    }
    return ans
}
let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr))