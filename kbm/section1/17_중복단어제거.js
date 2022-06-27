            function solution(s){  
                let answer = [];
                // 내풀이
                // for(let i = 0; i < s.length; i++){
                //     console.log(s[i], s.indexOf(s[i]), i)
                //     if(s.indexOf(s[i]) === i) {
                //         answer.push(s[i])
                //     }
                // }     
                
                // filter 사용 선생님 풀이
                answer = s.filter(function(v,i){
                        return s.indexOf(v) === i
                })
                // console 찍어보면 필터는 원본 배열은 변경하지 않는것을 확인할수있음
                console.log(s)
                return answer;
            }
            let str=["good", "time", "good", "time", "student"];
            console.log(solution(str));