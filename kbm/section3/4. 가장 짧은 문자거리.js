function solution(s, t){
let ans = []
let cnt = 0
let r = s.length -1

for(let x of s){
    x === t ? cnt = 0 : cnt++
    ans.push(cnt)
}
for(let i = r; i >=0; i--) {
    s[i] === t ? cnt = 0 : cnt++ 
    ans[i] = Math.min(ans[i], cnt)
}

return ans

}

let str="teachermode";
console.log(solution(str, 'e'));
        