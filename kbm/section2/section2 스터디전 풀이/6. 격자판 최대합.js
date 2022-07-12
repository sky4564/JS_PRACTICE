            function solution(arr){  
                let xsum = ysum = 0
                let lsum = rsum = 0
                let tmp = []
                
                for(let i =0; i <arr.length; i++){
                    xsum = ysum = 0
                    for(let j =0; j < arr.length; j++){
                        xsum += arr[i][j]
                        ysum += arr[j][i]                        
                    }
                    tmp.push(xsum)
                    tmp.push(ysum)
                    lsum += arr[i][i]
                    rsum +=arr[i][arr.length -1 -i]
                }
                tmp.push(lsum)
                tmp.push(rsum)
                console.log(tmp)
                return Math.max(...tmp)
            }

            let arr=[[10, 13, 10, 12, 15], 
                     [12, 39, 30, 23, 11],
                     [11, 25, 50, 53, 15],
                     [19, 27, 29, 37, 27],
                     [19, 13, 30, 13, 19]];
            console.log(solution(arr));
            
