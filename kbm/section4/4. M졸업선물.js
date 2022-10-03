function solution(m, product){  
  let max = 0
  let maxId = 0
  let tmp = []
  let tmpItem = 0
  let money = 0
  let ans = 0
  
  //최대값 선정 및 할인 진행 
  for(let i =0; i < product.length; i++){
    for(let j =0; j <product[i].length; j++){
      if(j === 0){
        if(product[i][j] > max) {
          max = product[i][j]
          maxId = i
        }
      }
    }
  }
  product[maxId][0] = max/2

  // 예산으로 환산을 위해 가격과 배송비를 더한 배열을 만듬
  for(let i =0; i < product.length; i++){
    tmpItem = 0
    for(let j =0; j <product[i].length; j++){
       tmpItem += product[i][j]
    }
    tmp.push(tmpItem)
  }

  
  //sort 내장함수 작동원리에대해 알아봐야할뜻
  console.log(tmp.sort((a,b) => a-b ))
  tmp = tmp.sort((a,b) => a-b )
  console.log(tmp)
  
  for(let i =0; i<tmp.length; i++){
    if(money < m){
      money += tmp[i]
      ans++
    }
    if(money>m) ans--      
  }
  
  return ans



}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));
