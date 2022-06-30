            function solution(a, b){         
                let ans =[]

                // 내풀이
                // for(let i = 0; i < a.length; i++){
                //     if(a[i] === 1){
                //         if(b[i]===1) ans.push('D')
                //         else if(b[i]===2) ans.push('B')
                //         else if(b[i]===3) ans.push('A')
                //     }
                //     if(a[i] === 2){
                //         if(b[i]===2) ans.push('D')
                //         else if(b[i]===3) ans.push('B')
                //         else if(b[i]===1) ans.push('A')
                //     }
                //     if(a[i] === 3){
                //         if(b[i]===3) ans.push('D')
                //         else if(b[i]===1) ans.push('B')
                //         else if(b[i]===2) ans.push('A')
                //     }
                // }

                // 선생님풀이
                // 확실히 풀이가 짧아짐 
                // else 를 사용하면 풀이가 많이 줄어듬
                for(let i = 0 ; i < a.length; i++){
                    if(a[i] === b[i]) ans.push('D')
                    else if(a[i]=== 1 && b[i]===3) ans.push('A')
                    else if(a[i]=== 2 && b[i]===1) ans.push('A')
                    else if(a[i]=== 3 && b[i]===2) ans.push('A')
                    else ans.push('B')
                }
                return ans
            }

            let a=[2, 3, 3, 1, 3];
            let b=[1, 1, 2, 2, 3];
            console.log(solution(a, b));