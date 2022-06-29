            function solution(arr){
                let answer = 0
                let sum1 = 0
                let sum2 = 0
                let n = arr.length
                let Lsum = 0
                let Rsum = 0
                let show =[]
                for(let i = 0; i < arr.length; i++){

                    for(let j =0 ; j < arr[i].length; j++){
                        sum1  += arr[i][j]
                        sum2 += arr[j][i]
                    }
                    show.push(sum1)
                    show.push(sum2)                    
                    sum1 = 0
                    sum2 = 0
                    answer = Math.max(answer,sum1, sum2)
                }
                for(let i = 0; i < arr.length; i++){
                            Rsum += arr[i][i]
                            Lsum += arr[i][n-1-i]                
                }
                answer = Math.max(answer,Rsum, Lsum)
                show.push(Lsum)
                show.push(Rsum)

                show.sort(function (a,b){
                    return a-b
                })
                
                // console.log(show)
                // show.sort 사용해서
                // answer = show[show.length-1]
                
                // 선생님은 Math.max 활용함

                
                return answer
            }
            

            let arr=[[10, 13, 10, 12, 15], 
                     [12, 39, 30, 23, 11],
                     [11, 25, 50, 53, 15],
                     [19, 27, 29, 37, 27],
                     [19, 13, 30, 13, 19]];
            console.log(solution(arr));