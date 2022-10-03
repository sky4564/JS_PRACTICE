function solution(arr1, arr2){
  
  // 너무 sort 안쓸려고 했는데 곱연산만 아니면 sort 써도 무방한듯 .. 시간복잡도 개념 이해도 올리는게 필요
  let n = arr1.length
  let m = arr2.length
  let p1 = p2 = 0
  arr1.sort((a,b) => a-b)
  arr2.sort((a,b) => a-b)
  let ans = []
  
  while(p1 < n && p2 < m){
    if(arr1[p1] < arr2[p2]) p1++
    else if(arr1[p1] > arr2[p2])p2++
    else{
      ans.push(arr1[p1])
      p1++
      p2++
    }
  }

  return ans


}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));
        