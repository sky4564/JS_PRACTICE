function solution(n, arr){
    let ans
    let max = Number.MIN_SAFE_INTEGER
    for(let x of arr){
        let tmp = x        
        let sum = 0
        while(tmp){
            sum +=(tmp%10)
            tmp = Math.floor(tmp/10)
        }        
        if(sum > max){
            max = sum
            ans = x            
        }else if(sum === max){
            if(ans<x) ans = x
        }
    }
    return ans
}

function solution2(n, arr){
    let ans
    let max = Number.MIN_SAFE_INTEGER
    for(let x of arr){
        let sum =x.toString().split('').reduce((a,b)=> a+Number(b), 0);
        console.log(sum)
        if(sum > max){
            max = sum
            ans = x            
        }else if(sum === max){
            if(ans<x) ans = x
        }
    }
    return ans
}



let arr=[1244, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
console.log(solution2(7, arr));
        
