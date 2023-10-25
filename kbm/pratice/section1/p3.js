function solution(n){
    let das
    if(n%12 == 0) das = n/12
    else das = n/12 + 1
    return Math.floor(das)
}            


//Math.ceil 소숫점을 버리고 ceil 천장으로
//반올림 개념이 아니라 무조건 + 1 이 된다.
//고로 위 문제에서 +1 같은걸 안해줘도 되서 적합
function solution(n){
    let answer;
    answer=Math.ceil(n/12);
    return answer;
}                        
console.log(solution(178));
