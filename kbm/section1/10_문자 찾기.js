            function solution(s, t){
                let ans = 0
                let cnt = 0
                for(let x of s){
                    if(x === t){
                        cnt++
                    }
                }
                ans = cnt
                return ans 
            }
            
            let str1="COMPUTERPROGRAMMING";
            console.log(solution(str1, 'R'));