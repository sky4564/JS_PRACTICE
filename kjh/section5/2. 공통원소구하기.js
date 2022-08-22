// function solution(arr1, arr2){
//   let answer=[];
//   arr1.sort((a, b)=>a-b);
//   arr2.sort((a, b)=>a-b);
//   let p1=p2=0;
//   while(p1<arr1.length && p2<arr2.length){
//       if(arr1[p1]==arr2[p2]){
//           answer.push(arr1[p1++]);
//           p2++;
//       }
//       else if(arr1[p1]<arr2[p2]) p1++;
//       else p2++;
//   }
//   return answer;
function solution(arr1, arr2) {
  // arr1에서 arr2에 존재하는 요소만 필터링
  const result = arr1.filter((val) => arr2.includes(val));
  let answer = "";
  //정렬
  result.sort((a, b) => a - b).map((val) => (answer += val + " "));
  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
// Q = 두 배열을 정렬을 하고 나서 투 포인터로 돌리는 게 더 빠른가?
