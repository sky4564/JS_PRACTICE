function solution(n){
let sum = 0 
//for 문 범위 가운데 조건이 성립하면 돌아간다..!
for(let i = 1; i <= n; i--){
    sum += i
    console.log(i)
}
return sum
}

console.log(solution(10));