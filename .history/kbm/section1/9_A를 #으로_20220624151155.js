            function solution(s){
                let answer =''
                for(let i = 0 ; i < 6; i++){
                    if(s[i] === 'A') answer += '#'
                    else {
                        answer += s[i] 
                    }

                }
                
                return answer
            
            }
            let str="BANANA";
            console.log(solution(str));


            function solution2(s2){
                let answer =''
                for(let i = 0 ; i < 6; i++){
                    if(s[i] === 'A') answer += '#'
                    else {
                        answer += s2[i] 
                    }

                }
                
                return answer
            
            }
            let str2="BANANA";
            console.log(solution2(str2));