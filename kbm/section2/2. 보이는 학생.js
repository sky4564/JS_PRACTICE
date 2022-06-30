            function solution(arr){         
                
                let min = arr[0]
                let answer = 1
                for(let i = 1; i < arr.length; i++){
                    if(arr[i] > min){
                        answer += 1
                        min = arr[i]
                    }
                }
                return answer;
            }

            let arr=[130, 135, 148, 140, 145, 150, 150, 153];
            console.log(solution(arr));