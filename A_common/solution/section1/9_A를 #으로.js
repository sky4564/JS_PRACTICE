            function solution(s){
                let answer="";
                for(let x of s){
                    if(x=='A') answer+='#';
                    else answer+=x;
                }
                return answer;
            }
            
            let str="BANANA";
            console.log(solution(str));



            function solution(s){
                let answer=s;
                answer=answer.replace(/A/g, "#");
                return answer;
            }
            
            let str2="BANANA";
            console.log(solution(str2));