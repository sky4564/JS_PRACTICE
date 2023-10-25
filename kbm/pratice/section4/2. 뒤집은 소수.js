function isPrime(num){
    if(num===1) return false;
    for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
        if(num%i===0) return false;
    }
    return true;
}
function solution(arr){
}

            
let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
            
