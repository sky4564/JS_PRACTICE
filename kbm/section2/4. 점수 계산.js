            function solution(arr){         
                
                //내풀이  방향은맞았음 쫌더 간소화 가능 
                // else 사용 , for of 사용

                // let ans =0;
                // let sum =0;
                // for(let i = 0; i < arr.length; i++){
                //     if(arr[i] === 1){
                //         sum += 1
                //         ans += sum
                //     }
                //     else if(arr[i] === 0) {
                //         sum = 0
                //     }
                //     console.log(sum)
                // }

                //선생님 풀이

                let ans = 0
                let sum = 0
                for(let x of arr){
                    if(x ===1){
                        sum++
                        ans +=sum
                    }else sum = 0

                }
                return ans
            }    
            let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
            console.log(solution(arr));