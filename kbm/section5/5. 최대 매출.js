function solution(k, arr){
<<<<<<< HEAD
    let answer, sum=0;
    for(let i=0; i<k; i++) sum+=arr[i];
    answer=sum;
    for(let i=k; i<arr.length; i++){
        sum+=(arr[i]-arr[i-k]);
        answer=Math.max(answer, sum);
    }                    
    return answer;
=======
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
    
>>>>>>> 8695e00af1c00a155eca5c4fe4d97987f2d89ee8
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
