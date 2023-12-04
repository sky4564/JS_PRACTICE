            // 십부제
            function solution(day, arr){                
                let count = 0
                arr.map((el) => {
                    let x = el%10
                    console.log(x)
                    if(x == day){
                        console.log('violate' , x)
                        count ++
                    }
                })
                return count
            }
            
            arr=[25, 23, 11, 47, 53, 17, 33];
            console.log(solution(3, arr));