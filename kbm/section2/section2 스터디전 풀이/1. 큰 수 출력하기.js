            function solution(arr){         
            console.log(Math.max(...arr))
            let max = arr[0]
            for (let x of arr){
                if(x > max){
                    max = x
                }
            }   
            return max
            }

            let arr=[7, 3, 9, 5, 6, 12];
            console.log(solution(arr));