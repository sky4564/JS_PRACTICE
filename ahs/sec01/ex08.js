// 일곱 난쟁이 (배열 중 합이 100인 경우 찾기)

function solution(arr){
  let answer = arr;
  let sum = answer.reduce((a, b)=>a+b, 0);
  for(let i=0; i<8; i++){
    for(let j=i+1; j<9; j++){
      if((sum-(answer[i]+answer[j]))==100 && answer[i] && answer[j] && answer.length > 7){ // sum=140
        console.log("answer["+i+"]="+answer[i]+ " / answer["+j+"]="+answer[j]); // answer[5]=15 / answer[6]=25
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }
  return answer;
}

let numbers = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(numbers)); // [20, 7, 23, 19, 10, 8, 13]

let numbers2 = [20, 7, 23, 19, 10, 15, 28, 8, 13];
console.log(solution(numbers2));  // [7, 19, 10, 15, 28, 8, 13]

