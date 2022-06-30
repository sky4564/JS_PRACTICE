
// 흘러가는 대로 주먹구구식 코딩은  array out of bound 에러를 부를수있음
// 지금 안뜨긴 했는데 조금만더 생각을 잘하면 범위 안넘어가고 쉽게가능
// 지금 문제같은경우   cnt =0 으로 시작하는거에 꽂혀있어서 식이복잡해짐
// cnt =1 로 시작하고 cnt > 1인것만 추가 하는 발상으로 식 쉽게 가능 
function Msolution(s){
    let cnt = 0
    let ans =''
    for(let i =0; i < s.length; i++){
        if(i === s.length -1){
            ans +=s[i]
        }
        else if(s[i] === s[i+1]){
            cnt += 1
        }
        else if(s[i]!==s[i+1]){
            let add = cnt + 1
            if(s[i-1] &&s[i-1] !==s[i]) add =''
            ans += s[i]
            ans += add
            cnt = 0
        }
    }
    return ans
}

//생각을 쪼금만 다르게 하면 쉬운길이 있다.
function Tsolution(s){
    let cnt = 1
    let ans =''
    for(let i =0; i < s.length; i++){
        if(s[i] === s[i+1]){
            cnt += 1
        }
        else if(s[i]!==s[i+1]){
            ans += s[i]
            if(cnt > 1) ans += cnt
            cnt = 1
        }
    }
    return ans
}

let str="KKHSSSSSSSE";
console.log(Msolution(str));
console.log(Tsolution(str));