            
            //내풀이
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


            // 정규식 표현 str.replace 메소드사용
            function solution2(s2){
                let answer = s2
                answer=answer.replace(/A/g, '#')
                
                return answer
            
            }
            let str2="BANANA";
            console.log(solution2(str2));