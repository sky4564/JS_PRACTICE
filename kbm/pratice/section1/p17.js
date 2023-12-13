function solution(s) {
    let ans = []
    const el = s.entries();
    for(let [index , x] of el){
        if (s.indexOf(x) == index) ans.push(x)
    }
    return ans
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
