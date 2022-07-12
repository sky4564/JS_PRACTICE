function isPrime(num){
    if(num===1) return false;
                for(let i=2; i<=Math.sqrt(num); i++){
                    if(num%i===0) return false;
                }
                return true;
}
function solution(arr){
    let ans = []
    let tmp = []
    
    console.log(arr)
    for(let x of arr){
        let num = 0
        while(x){
            let t = x%10
            num = num*10+t
            x = Math.floor(x/10)
        }
        tmp.push(num)
        if(isPrime(num)) ans.push(num)
    }
    console.log(tmp)


    return ans
}

            
let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
            
