            function solution(a, b){         
                let ans = ''
                
                /** 
                 * 또 이렇게 길게 풀었는데 .. 
                 * if 조건문안에 있는 if 조건문은 
                 * 한번에 식을 만들수 있다는것을 생각해보자 
                 * 특별한 연산이 없으면 한번에 조건을 받아서 처리하는게 
                 * 식이 줄고 깔끔해진다.
                 * */ 
                
                for(let i = 0; x < a.length; i++){
                    if(a[i] == b[i]){
                        ans += 'D'
                    }
                    else if(a[i] == 1){
                        if(b[i] == 3){
                            ans +='A'
                        }else ans +="B"
                    }
                    else if(a[i] == 2){
                        if(b[i] == 1){
                            ans +='A'
                        }else ans +="B"
                    }
                    else if(a[i] == 2){
                        if(b[i] == 1){
                            ans +='A'
                        }else ans +="B"
                    }
                }
            }

            let a=[2, 3, 3, 1, 3];
            let b=[1, 1, 2, 2, 3];
            console.log(solution(a, b));