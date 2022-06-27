            function solution(s){  
                let answer;                
                    // 내풀이 
                    // if(s.length % 2 === 0){
                    //     let pin = s.length/2
                    //     answer = s[pin - 1] + s[pin]
                    // } else {
                    //     let pin = Math.floor(s.length/2)
                    //     answer = s[pin]
                        
                    // }


                    //선생님풀이 arr.substring, arr.substr 활용
                    // answer에 출력되어야할 문자열이 길어지면 유용
                    //substring(a,b) a = start index b =end index
                    //substr(a, index) a =start index b = index
                
                // let mid = Math.floor(s.length/2)
                //     if(s.length%2 === 0) {
                //         answer = s.substring(mid-1, mid+1)
                //     }else{
                //         answer = s.substring(mid, mid+1)
                //     }
                
                let mid = Math.floor(s.length/2)
                    if(s.length%2 === 0) {
                        answer = s.substr(mid-1, 2)
                    }else{
                        answer = s.substring(mid, 1)
                    }                

                
                
                
                return answer;
            }
            console.log(solution("good"));