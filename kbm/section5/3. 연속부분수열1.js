function solution(m, arr){
let ri = li = 0
let tmp = 0
let cnt = 0
for(let ri = 0; ri < arr.length; ri++){
  tmp += arr[ri]
  if(tmp === 6) {
    cnt++

  }
  while(tmp > 6){
    tmp -= arr[ri]
  }
}

}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));