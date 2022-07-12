            function solution(arr){  
                let n =arr.length
                let ans = 0
                
                
                for(let i = 0; i < n; i++){
                    for(let j =0; j < arr[i].length; j++){
                        let flag = true
                        let dx = [-1, 0, 1, 0]
                        let dy = [0, 1, 0, -1]
                        for(let k =0; k <4; k++){
                            let nx=i+dx[k];
                            let ny=j+dy[k];
                            if(nx>=0 && nx<n && ny>=0 && ny<n && arr[nx][ny]>=arr[i][j]){
                                // 길이 조건만 잘잡아주면 되는데 ... 후  길이로 index 조건설정하는게 제일 편하고 확실하고 직관적임
                                // if(arr[nx][ny] !== null && arr[nx][ny] !== undefined && arr[nx][ny]>=arr[i][j]){
                                flag = false
                            }
                        }
                        if(flag === true) ans++
                    }
                }
                return ans
            }

            let arr=[[5, 3, 7, 2, 3], 
                     [3, 7, 1, 6, 1],
                     [7, 2, 5, 3, 4],
                     [4, 3, 6, 4, 1],
                     [8, 7, 3, 5, 2]];
            console.log(solution(arr));