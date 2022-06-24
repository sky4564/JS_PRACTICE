            function solution(a, b, c){
                // 내풀이
                // let longLine = 0;
                // if(a>b) longLine = a;
                // else longLine = b;
                // if(longLine < c) longLine = c

                // if(longLine)

                // 선생님풀이 ..
                // 쉽게 생각하는 방법을 배우기
                // 코딩테스트를 너무 어렵게 생각한다
                // 직관적으로 생각하고 그 직관적인 생각을 어떻게 코드로 표현할지 생각
                // 직관적인 표현을 위해 활용할수있는건 다 사용하자
                // simple is best
                
                let max
                let sum = a+b+c
                let answer ='YES'            
                
                if(a<b) max = b
                else max = a
                if(max < c ) max = c
                if(sum - max < max) answer = 'NO'

                return answer;
            }

            console.log(solution(13, 33, 17));