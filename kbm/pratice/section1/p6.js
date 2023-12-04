function solution(arr){
    //배열을 map 으로 순회 ! 
    let sum = 0
    let min = Number.MAX_SAFE_INTEGER
    arr.map((el, index)=>{
        if(el%2 !== 0) {
            sum += el
            if(el < min) min = el
        }
    })
    console.log(sum)
    return min
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));