function solution(m, arr){
let li = 0
let tmp = 0
let cnt = 0

for(let ri = 0; ri < arr.length; ri++){
  tmp += arr[ri]
  if(tmp === m) cnt++  
  while(tmp >= m){
    tmp -= arr[li++]    
    if(tmp === m ) cnt++
  }
}

return cnt

}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));