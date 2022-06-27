// 봉우리
// 지도에 값은 각 지역의 높이. 
// 자신의 상하좌우 숫자보다 높은 경우 해당 지역은 봉우리 지역. 
// 봉우리 지역의 총개수를 구할 것.

function solution(input){
  let map = input;
  let length = input.length + 2;
  let edge = new Array(length);
  let result = 0
  
  // map init
  map.forEach(row => row.unshift(0));
  map.forEach(row => row.push(0));
  
  edge = Array(length).fill(0);
  map.unshift(edge);
  edge = Array(length).fill(0);
  map.push(edge);
  
  /*
  console.log(...map);
  [0, 0, 0, 0, 0, 0, 0]
  [0, 5, 3, 7, 2, 3, 0]
  [0, 3, 7, 1, 6, 1, 0]
  [0, 7, 2, 5, 3, 4, 0]
  [0, 4, 3, 6, 4, 1, 0]
  [0, 8, 7, 3, 5, 2, 0]
  [0, 0, 0, 0, 0, 0, 0]
  */
  
  for(let i = 0; i < length; i++) {
    for(let j = 0; j < length; j++) {
      
      if ( i != 0 && j != 0 // except edges
        && map[i][j] > map[i][j-1] // left
        && map[i][j] > map[i][j+1] // right
        && map[i][j] > map[i-1][j] // top
        && map[i][j] > map[i+1][j] // down
      ) {
        result++;
      }
    }
  }
  
  return result;
}

let n = 5;
let input = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2]
];
console.log(solution(input)); // 10
// 5 7 3 7 6 7 4 6 8 5

