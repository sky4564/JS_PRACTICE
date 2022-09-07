function solution(n, k){
    let a = new Array(n)
            
        for(let x = 0 ; x < a.length; x++)  {
            a[x] = x + 1
        }
        console.log(a)
        
        let cnt = 1
        while(a.length !== 1){
            if(cnt === 3){
                a.shift()
                cnt = 1
            }else {
                a.push(a.shift())
                cnt++
            }
            console.log(a)            
        }
    return a                
}

console.log(solution(8, 3));
