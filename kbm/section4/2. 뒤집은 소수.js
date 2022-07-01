function isPrime(num){
    for(let i = 2 ; i < 10; i++){
        if(num % i === 0) return false
    }
    return true
}
function solution(arr){
    let tmp
        
    for(let i =0 ; i < arr.length; i++){
            tmp = arr.toString().split(',').reverse()
            
        
        for(let j = 0; j <tmp[i].length; j++){
            console.log(tmp[i][j])
            let block = tmp[i][j]
            tmp[i][j] = tmp[i][tmp[i].length-1-j]
            tmp[i][tmp[i].length-1-j] = block
        }
    }
    console.log(tmp)
}

function isPrime2(num){
    for(let i = 2 ; i < 10; i++){
        if(num % i === 0) return false
    }
    return true
}
function solution2(arr){
    let ans =[]
    for(let x of arr){
        let res =0;
        while(x){
            let t = x%10    
            res  = res*10 + t
            x =  x/10
        }
        ans.push(res)
    }
    return ans        
}

            
let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
// console.log(solution(arr))
console.log(solution2(arr))
// console.log(arr)
// console.log(arr.toString())
// console.log(arr.toString().split(','))
            
