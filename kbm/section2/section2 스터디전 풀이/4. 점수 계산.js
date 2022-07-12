            function solution(arr){         
                let ans = 0
                let add  = 0
                for(let i = 0; i < arr.length; i++){
                    if(arr[i] === 1){
                        add++
                        ans += add
                    } else add = 0
                }
                return ans
            }

            let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
            console.log(solution(arr));