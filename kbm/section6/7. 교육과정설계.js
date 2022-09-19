function solution(need, plan){
    let stack = ''
    for(let x of plan) {
        if( x === 'C' || x === 'B' || x === 'A'){
            stack += x 
        }
    }
    if(need === stack){
        return 'YES'
    } else return 'NO'

}

let need="CBA";
let plan="CDABGE";
console.log(solution(need, plan));
