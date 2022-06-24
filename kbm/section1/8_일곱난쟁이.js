            function solution(arr){
                 

                let sum = 0;
                let caseCount = 0;

                /**
                 * 기존방벙
                for(let s = 0 ; s < arr.length; s++){
                    sum += arr[s]                    
                }
                */
                /**
                 * 새로운 방법
                for(let s = 0 ; s < arr.length; s++){
                    sum += arr[s]                    
                }
                */
               sum = arr.reduce((a, b)=>a+b, 0)




                for(let i = 0 ; i < arr.length; i++){
                    for(let j = i+1; j < arr.length; j++){
                        if(sum - (arr[i] + arr[j]) === 100){
                            arr.splice(i,1)
                            arr.splice(j-1,1)
                            caseCount++
                        }
                    }
                }
                answer = arr;
                console.log(caseCount);
                return answer;
            }
            
            let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
            console.log(solution(arr));
            