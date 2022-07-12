            function solution(arr){         
                let max = arr[0]
                let ans = 1
                for(let x of arr){
                    if(x > max){
                        ans++
                        max = x
                    }
                }
                return ans
            }

            let arr=[130, 135, 148, 140, 145, 150, 150, 153];
            console.log(solution(arr));