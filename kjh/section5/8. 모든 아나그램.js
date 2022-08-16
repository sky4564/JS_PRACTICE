function compareMaps(map1, map2){
    if(map1.size!==map2.size) return false;
    for(let [key, val] of map1){
        if(!map2.has(key) || map2.get(key)!==val) return false;
    }
    return true;
}
            
function solution(s, t){

} 
let a="bacaAacba";
let b="abc";
console.log(solution(a, b));
        