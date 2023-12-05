            function solution(s, t){
                let count = 0
                for(x of s){                    
                    if(x == t){
                        count++
                    }
                }
                return count
            }
            
            let str1="COMPUTERPROGRAMMING";
            console.log(solution(str1, 'R'));    