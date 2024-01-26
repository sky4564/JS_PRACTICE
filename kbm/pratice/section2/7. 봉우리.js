function solution(arr) {
  let n = arr.length
    for (let i = 0; i < arr.length; i++) {
    
    for (let j = 0; j < arr.length; j++) {        
        let dx = [0,-1,0,1]
        let dy = [-1,0,1,0]
        for(let k =0; k < 4; k++){
            let nx = i+dx[k]
            let ny = j+dy[k]
            if( n > nx && nx >=0&& ny >=0 && ny < n){
                console.log(arr[nx][ny])
            }
        }

    }
  }
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
