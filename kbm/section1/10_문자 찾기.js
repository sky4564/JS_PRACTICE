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


            // 내장함수 사용.. 확실히 간결해진다.
            function solution2(s, t){
                let ans = s.split(t).length - 1
                
                return ans 
            }
            
            let str2="COMPUTERPROGRAMMING";
            console.log(solution(str2, 'R'));