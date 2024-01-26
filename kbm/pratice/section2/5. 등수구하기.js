function solution(arr) {
    let ans = []
    let el
    let el2
    for(let i =0 ; i < arr.length; i++){
        let rank = 1
        el = arr[i]        
        for(let j = 0; j < arr.length; j++){
            // console.log(el,el2)
            el2 = arr[j]            
            if(el<el2) rank++
        }
        ans.push(rank)        
    }
    return ans
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
