            function solution(n){
                
                // 내풀이
                // let answer;
                // if(n%12 == 0) answer = Math.floor((n/12))
                // else answer = Math.floor((n/12)) + 1
                
                // -> 보완점 
                // if 조건문 처리 할 필요는 없었던게 
                // Math.floor 는 소수점 있을떄만 작동

                
                //선생님풀이
                // floor 내림 ceil 올림 round 반올림
                // 상황에 맞게 사용하면 simple code 가능 
                
                let answer
                answer = Math.ceil(n/12)
                return answer;
            }

            console.log(solution(178));