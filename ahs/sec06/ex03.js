// 크레인 인형뽑기(카카오 기출)
// fruits.push(...)는 fruits[fruits.length] = ... 와 같다. (https://ko.javascript.info/array#ref-80) 
// fruits.pop()은 fruits[fruits.length-1]을 제거하는 것이다.

function solution(board, moves) {
    let answer = [];
    for (m of moves) {
        let targetArray = board[m-1];
        let target = targetArray[targetArray.length-1];

        if (target !== 0) {
            answer.push(targetArray.pop());
        }

        console.log(target, answer[answer.length-1]);

        //if (target !== 0 && target === answer[answer.length])
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
