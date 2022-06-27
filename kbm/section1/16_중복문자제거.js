            function solution(s){  
                let answer="";
                // console.log(s.indexOf("k"))
                // indexOf 내장함수를 활용해서 문제풀이
                // 해당 arr 처음나온 문자를 기준으로 indexOf결정남
                
                
                // 중복문자 제거 문제 풀이
                // for(let i  =0; i <s.length; i++ ){
                //     console.log(s[i], s.indexOf(s[i]), i)
                //     if(s.indexOf(s[i]) === i){
                //         answer += s[i]
                //     }
                // }

                // 중복문자 counting 문제풀이
                answer = 0
                let pos = s.indexOf('k')
                console.log(pos)
                while(pos !== -1){
                    pos = s.indexOf('k',pos+1)
                    console.log(pos)
                    answer++
                }


                return answer;
            }
            console.log(solution("ksekkset"));