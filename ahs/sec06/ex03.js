// 크레인 인형뽑기(카카오 기출)
// array.push(...)는 array[array.length] = ... 와 같다. (https://ko.javascript.info/array#ref-80) 
// array.pop()은 array[array.length-1]을 제거하는 것이다.

function solution(board, moves) {
    let answer = 0;
    let basket = [];

    for (m of moves) {
        let target = board[m-1].pop();

        if (target !== 0) {
            if (target === basket[basket.length-1]) {
                answer += 2;
            }

            basket.push(target);
        }
    }

    return answer;
}

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
]; 
let moves = [1, 5, 3, 5, 1, 2, 1, 4]; 

console.log( solution(board, moves) ); // 4


// 강의풀이
/*
function solution(board, moves) {
  let answer = 0;
  let stack = [];
  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        let tmp = board[i][pos - 1];
        board[i][pos - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break;
      }
    }
  });

  return answer;
}
*/