function solution(k, arr){
    let li = 0
    let ri = 0
    let cnt = 0
    let max = 0
    let tmp = 0

    for(ri =0; ri < arr.length; ri++){
        max += arr[ri]
        if(cnt < 3){
            cnt++
        }
        if(cnt === 3){
            console.log(ri)
            tmp = max += arr[ri+1] -= arr[li++] 
            if(tmp > max) max = tmp
            console.log(max)
        }
        
    }
    
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
