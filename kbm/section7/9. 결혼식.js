function solution(times){
    let ans = 0;
    let T_LINE = []
    for(let x of times){
        T_LINE.push([x[0],'s'])
        T_LINE.push([x[1],'e'])
    }
    T_LINE.sort((a,b)=>{
        if(a[0]===b[0]) return a[1].charCodeAt() - b[1].charCodeAt()
        else return a[0]-b[0]
    })
    
    let cnt = 0
    for(let x of T_LINE){
        if(x[1] === 's') cnt++
        else if(x[1] === 'e') cnt--
        ans = Math.max(ans,cnt);
    }
    return ans
}

let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution(arr));
