            function solution(s, t){
                let cnt = 0
                for(let x of s){
                    if(x === t){
                        cnt++
                    }
                }
            }
            
            let str1="COMPUTERPROGRAMMING";
            console.log(solution(str1, 'R'));