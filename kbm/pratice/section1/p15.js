function solution(s) {
    let mid = s.length / 2    
    
    if(s.length % 2 == 1){
        mid = Math.floor(mid)
        return s.substring(mid,mid+1)
    } else {
        mid = Math.floor(mid)
        return (s.substring(mid-1,mid+1))
    }
}
console.log(solution("st1w2dy"));
