function solution(s){
let pot = []
let ans = 0;
let flag = ''
    for (let i = 0; i < a.length; i++ ){
        if(s[i]=== '(') {
            pot.push(s[i])
            flag ='israz'    
        }
        else if (s[i]=== ')'){
            if(s[i-1] ==='('){
                if(flag === 'isbar'){
                    pot.pop()
                    ans += 1    
                    break;
                }
                pot.pop(s[i])
                ans += pot.length
                flag = 'isbar'
            }
        }
    }
    return ans
}
            

let a="()(((()())(())()))(())";



console.log(solution(a));