function solution(arr){
    let ans = []
    let minNum = 100
    let sum = 0
    arr.map((el, index) => {        
        if(el%2 !== 0) {            
            sum += el
        }
        if(el < minNum) minNum = el        
    })
    ans.push(sum)
    ans.push(minNum)
    return ans
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));