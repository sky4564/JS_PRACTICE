// 뒤집은 소수

function solution(input){
  let numbers = input;
  let result = numbers.map(n => {
    let reversed = [];
    let tmp = n;
    while (tmp > 0) {
      reversed.push(tmp % 10);
      tmp = Math.floor(tmp / 10);
    }
    return Number(reversed.join(""));
  }).filter(n => {
    for(var i = 2; i < n; i++)
      if(n % i === 0) return false;
    return n > 1;
  })
  
  return result;
}

let input = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(input)); // [23, 2, 73, 2, 3]
