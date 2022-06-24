// 문자열도 배열처럼 참조가능하다는점을 생각

            function solution(s){
                let answer    
                for(let i = 0 ; i < 10; i++){
                    if(s[i] === 'A') answer += '#'
                    else answer += s[i]
                }
                
                return answer
            
            }
            let str="BANANA";
            console.log(solution(str));



            function solution2(s){
                
            }
            
            let str2="BANANA";
            console.log(solution2(str2));