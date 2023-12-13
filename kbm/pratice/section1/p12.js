            function solution(s){         
                let ans = ''
                for(let x of s){                                        
                    if(x === x.toLowerCase()) {
                        ans += x.toUpperCase()                        
                    } else ans += x
                }
                return ans
            }

            let str="ItisTimeToStudy";
            console.log(solution(str));
