function solution(s){  
  let answer = ''
  let cnt = 0
  for(let x of s){
    if(x === '('){
      cnt++
    } else if(x === ')'){
      cnt--
    }else {
      if(cnt === 0){
        answer += x
      }
    }
  }
  return answer
}

function solution2(s){
  let stack = []
  for(let x of s) {
    if(x === ')') {
      while(stack.pop() !== '(');
    } else stack.push(x)    
  }
  return stack.join('')
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution2(str));
