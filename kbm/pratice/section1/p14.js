let str = ["teacher", "time", "student", "beautiful", "good"];

function solution(s) {
    let ans = ''
    let num = 0
    for(let x of str){        
        if(x.length > num){            
            ans = x            
            num = x.length
        }
    }
    
    return ans
}
console.log(solution(str))

