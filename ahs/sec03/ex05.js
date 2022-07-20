// 문자열 압축

function solution(input){
  let word = input.split("");
  
  let result = [];
  let count = 1;
  
  word.forEach((target, i, arr) => {

    if(target === arr[i+1]) {
      count++;
    } else {
      result.push(target);
      
      if (count > 1) {
        result.push(String(count));
      }
      
      count = 1;
    }
    
    // console.log(result);
    /*
      []
      [ 'K', '2' ]
      [ 'K', '2', 'H' ]
      [ 'K', '2', 'H' ]
      [ 'K', '2', 'H' ]
      [ 'K', '2', 'H' ]
      [ 'K', '2', 'H' ]
      [ 'K', '2', 'H' ]
      [ 'K', '2', 'H' ]
      [ 'K', '2', 'H', 'S', '7' ]
      [ 'K', '2', 'H', 'S', '7', 'E' ]
    */
    
    return result;
  });
  
  
  return result.join("");
}

let input = "KKHSSSSSSSE";
console.log(solution(input)); // K2HS7E

