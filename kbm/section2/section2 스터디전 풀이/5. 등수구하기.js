            /**
             * 다시 풀었는데 발상이 잘 안떠오름
             * ans 에 새로운 배열을 만들어서 처리 할 생각을 못함
             * 
             */
            
            function solution(arr){  
                let n = arr.length
                let ans = Array.from({length:n}, () =>1)
                for(let i =0; i <arr.length; i++){
                    for(let j =0; j < arr.length; j++){
                        if(arr[i] < arr[j]){
                            ans[i]++
                        }
                    }
                }
                console.log(ans)
            }


            let arr=[87, 89, 92, 100, 76];
            console.log(solution(arr));