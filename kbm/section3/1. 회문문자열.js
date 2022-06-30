// 내풀이
function solution1(s){
    let cmp = ''
    s = s.toLowerCase()
    for(let i =s.length -1 ; i >= 0; i--){
         cmp += s[i]
    }
    return cmp === s ? 'YES' : 'NO'
}

console.log(solution1('gooG'))


// 선생님 풀이 손코딩 
function solution2(s){
    let ans
    s = s.toLowerCase()
    for(let i = 0; i < (s.length/2); i++){
         if(s[i] !== s[s.length -i-1]) ans = 'NO'
         else ans = 'YES'
    }    
    return ans
}

console.log(solution2('gooG'))

function solution3(s){
    s = s.toLowerCase()
    cmp = s.split('').reverse().join('')
    return s === cmp ? 'YES' : 'NO'
}

console.log(solution3('goog'))