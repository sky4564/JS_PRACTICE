            function solution(s, t){
                let answer=0;
                for(let x of s){
                    if(x===t) answer++;
                }
                return answer;
            }
            
            let str1="COMPUTERPROGRAMMING";
            console.log(solution(str1, 'R'));