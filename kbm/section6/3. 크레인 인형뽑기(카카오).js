function solution(a, b){
    let stack = []
    for(let x = 0; x < b.length; x++) {
        let num = b[x]
            for (let i = 0 ; i <a.length ; i++){
                if(a[i][num-1] !== 0){
                    stack.push(a[i][num-1])
                    a[i][num-1] = 0
                    break
                }
            }
    }       
    console.log(stack)
    let ans = 0    
    for(let x = 0; x< stack.length; x++){
        if(stack[x] == stack[x+1]){
            stack.splice(x, 2)
            ans +=2
            x = 0
        }
    }
    
    return ans
}

function solution2(a, b){
    let stack = []
    for(let x = 0; x < b.length; x++) {
        let num = b[x]
            for (let i = 0 ; i <a.length ; i++){
                if(a[i][num-1] !== 0){
                    stack.push(a[i][num-1])
                    a[i][num-1] = 0
                    break
                }
            }
    }       
    console.log(stack)
    let ans = 0    
    for(let x = 0; x< stack.length; x++){
        if(stack[x] == stack[x+1]){
            stack.splice(x, 2)
            ans +=2
            x = 0
        }
    }
    
    return ans
}
            
let a=[[0,0,0,0,0],
       [0,0,1,0,3],
       [0,2,5,0,1],
       [4,2,4,4,2],
       [3,5,1,3,1]];

       let b=[1, 5, 3, 5, 1, 2, 1, 4];
       console.log(solution2(a, b));