function mysolution(arr1, arr2){

let tmp =[]
let ans =[]

for(let i = 0; i <arr1.length; i++){
  tmp.push(arr1[i])
}

for(let j = 0; j <arr2.length; j++){
  tmp.push(arr2[j])
}


ans = tmp.sort((a,b) => a-b)
return ans


}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];


console.log(mysolution(a, b));

//=======================================================================//
// 시간복잡도를 생각함 sort를 쓰면 n X log n 이라서 로 sort 없이 풀이

function tsolution(arr1, arr2){
  let n = arr1.length
  let m = arr2.length
  let p1 = p2 = 0
  let ans = []
  
  while(p1 <n && p2 < m){
    if(arr1[p1] < arr2[p2]){
      ans.push(arr1[p1++])
    } else ans.push(arr2[p2++])
  }

  while(p1 < n) ans.push(arr1[p1++])
  while(p2 < m) ans.push(arr2[p2++])

  return ans
}

let c=[1, 3, 5];
let d=[2, 3, 6, 7, 9];

console.log('tsolution')
console.log(tsolution(c, d));

