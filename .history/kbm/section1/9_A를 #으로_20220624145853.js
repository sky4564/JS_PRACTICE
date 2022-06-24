            function solution(s){
                let answer =''
                for(let i = 0 ; i < 6; i++){
                    if(s[i] === 'A') answer += '#'
                    else {
                        answer += s[i] 
                        console.log(s[i])
                    }

                }
                
                return answer
            
            }
            let str="BANANA";
            console.log(solution(str));