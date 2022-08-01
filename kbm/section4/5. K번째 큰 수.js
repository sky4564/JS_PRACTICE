function solution(n, k, card){            
  let tmpList = new Set() 
  let tmp = 0

  for(let i =0; i<n; i++){
    for(let  j = i+1; j <n; j++){
        for(let k =j+1; k < n; k++){
          tmp = 0
          tmp = card[i] + card[j] + card[k]
          tmpList.add(tmp)
        }        
    }
  }
  console.log(tmpList)  
  console.log(Array.from(tmpList).sort((a,b) => b-a))

}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));