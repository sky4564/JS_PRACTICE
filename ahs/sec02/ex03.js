// 가위 바위 보 (1:가위, 2:바위, 3:보)
// A가 이기면 A 출력, B가 이기면 B 출력. 비길 경우에는 D를 출력.

function solution(n, a, b){
  console.log(n, a, b);
  let result = new Array(n);
  for(let i = 0; i < n; i++) {
    
    // A = B
    if (a[i] === b[i]) {
      result[i] = "D";
    } 
    // A wins
    else if (a[i] - 1 === b[i] || a[i] + 2 === b[i]) {
      result[i] = "A";
    }
    // B wins
    else if (a[i] + 1 === b[i] || a[i] - 2 === b[i]) {
      result[i] = "B";
    }
    
  }
  
  return result;
}

const n = 5;
const a = [2, 3, 3, 1, 3];
const b = [1, 1, 2, 2, 3];
console.log(solution(n, a, b)); // ["A", "B", "A", "B", "D"]

