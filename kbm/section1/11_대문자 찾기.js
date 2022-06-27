            function solution(s){         
                let ans = 0
                for(let x of s){
                    if(x === x.toUpperCase()){
                        ans++
                    }
                }
                return  ans
            }

            let str="KoreaTimeGood";
            console.log(solution(str));


            //use ASC__CODE
            function solution2(s){         
                let ans = 0
                for(let x of s){
                    console.log(x.charCodeAt())
                    if( 65 <= x.charCodeAt() && x.charCodeAt() <= 90){
                        ans++
                    }
                }
                return  ans
            }

            let str2="KoreaTimeGood";
            console.log(solution2(str2));