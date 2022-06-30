            function solution(arr){         
                
                let ans = []
                
                for(let i = 0; i < arr.length ; i++){
                    if(i===0){
                        ans.push(arr[i])
                    }else if(arr[i] > arr[i-1]){
                        ans.push(arr[i])
                    }
                }

                return ans
            }

            let arr=[7, 3, 9, 5, 6, 12];
            console.log(solution(arr));