
            function solution(a, b, c){
                let answer;
                // 정렬사용
                // let arr = [a,b,c]                
                // arr.sort()
                // answer = arr[0]
                
                // let arr =[a,b,c]
                // let tmp
                // let len = arr.length
                
                // 내 풀이 
                // for(let i = 0 ; i < len; i++){
                //     if(arr[len-i] < arr[len-(i+1)]){
                //        tmp = arr[len-(i+1)]
                //        arr[len-(i+1)] = arr[len-i]
                //        arr[len-i] = tmp
                //     }
                // }
                // answer = arr[0]

                // 선생님풀이
                if(a<b) answer = a
                else answer = b
                if(c<answer) answer = c


                return answer;
            }

            console.log(solution(2, 5, 1));
