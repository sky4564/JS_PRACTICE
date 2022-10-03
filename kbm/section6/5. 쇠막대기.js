function solution(s){
let pot = []
let ans = 0;
    for (let i = 0; i < s.length; i++ ){
        if(s[i]=== '(') {
            pot.push(s[i])            
        }
        else {
            pot.pop()
            if(s[i-1] ==='('){                
                    ans += pot.length            
            } else ans++
        }
    }
    return ans
}
            

let a="()(((()())(())()))(())";



console.log(solution(a));