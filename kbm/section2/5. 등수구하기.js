            function solution(arr){  
            let n = arr.length
            let ans = Array.from({length:n}, () =>1)                            
                // for(let x of arr){
                //     rank = arr.filter(function(v,i){
                //     return v > x
                //     })
                //     console.log(rank)
                //     ans.push(rank.length + 1)
                // }
                for(let i =0 ; i < arr.length; i++){
                    for(let j  = 0; j < arr.length; j++){
                        if(arr[i] > arr[j]) ans[i] += 1
                    }
                }
            return ans
            }            
            let arr=[92, 80, 72, 100, 76];
            console.log(solution(arr));