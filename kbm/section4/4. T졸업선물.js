function solution(m, product){
let n = product.length
let ans = 0
let cnt = 0

product.sort((a,b) => ( (a[0]+a[1]) - (b[0]+b[1]) ) )
console.log(product)
for(let i = 0 ; i < n ; i ++) {
  cnt = 0
  let money = m
  money -=(product[i][0]/2 + product[i][1])
  for(let j = 0 ; j < n ; j ++){
    if(j !== i && money < (product[j][0] + product[j][1])) break
    if(j !== i && money > 0){
      money - (product[j][0] + product[j][1])
      cnt++
    }
  }
  ans = Math.max(ans,cnt)
}
return ans


}

let arr=[[6, 6], [2, 100], [4, 3], [4, 5], [10, 100]];
console.log(solution(28, arr));
