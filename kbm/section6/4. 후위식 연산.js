function solution(s){  
stack = []
  for(let x of s) {
    let rt = 0
    let lt = 0
    if(!isNaN(x)) {
      stack.push(Number(x))
      // console.log(stack)
    }
    else if(x === '+') {
      rt = stack.pop()
      lt = stack.pop()
      stack.push(lt+rt)
    }
    else if(x === '-') {
      rt = stack.pop()
      lt = stack.pop()
      stack.push(lt-rt)
    }
    else if(x === '*') {
      rt = stack.pop()
      lt = stack.pop()
      stack.push(lt*rt)
    }
    else if(x === '%') {
      rt = stack.pop()
      lt = stack.pop()
      stack.push(lt/rt)
    }    
  }
    ans = stack[0]
  return ans
}

let str="352+*9-";
console.log(solution(str));