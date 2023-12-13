            function solution(s){         
                let ans = 0
                for(let x of s){
                    if(x === x.toUpperCase()) ans++
                }
                return ans
            }

            let str="KoreaTimeGood";
            console.log(solution(str));