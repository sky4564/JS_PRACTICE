function solution(s){
    let answer = 'yes'
    s=s.toLowerCase()
    let len = s.length;
    for(let i =0 ; i < Math.floor(len/2); i++){
        if(s[i] !=s[len-i]) return 'NO'
    }
    return answer;
}


let str = 'gooG'
console.log(solution(str));