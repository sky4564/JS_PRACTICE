            function solution(s){  
                let min = Number.MIN_SAFE_INTEGER
                let ans =''
                for(let x of str){
                    if(x.length > min){
                        min = x.length
                        ans = x
                    }
                }
                return ans
                
            }
            let str=["teacher", "time", "student", "beautiful", "good"];
            console.log(solution(str));