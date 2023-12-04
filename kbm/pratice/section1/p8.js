            // 일곱 난쟁이
            // 완전탐색
            // 이중포문
            // 탐색범위 설정 0< i < arr.length = 전체 탐색
            // 탐색범위 설정 0< i < arr.length - 1 = 맨뒤에 index 빼고 탐색
            function solution(arr){
                console.log(arr.length, 'arr length')
                let obj = []
                let count = 0
                let answer=arr;
                let sum=answer.reduce((a, b)=>a+b, 0);
                for(let i = 0; i < arr.length -1; i++) {                    
                    for(let j = i+1; j < arr.length; j++){
                        if(sum-(arr[i]+ arr[j]) == 100) {
                            arr.splice(i,1)
                            arr.splice(j,1)
                            count++
                            obj.push(answer)                       
                        }
                    }                
                }
                console.log(count)
                return obj
            }
            
            let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
            
            console.log(solution(arr))