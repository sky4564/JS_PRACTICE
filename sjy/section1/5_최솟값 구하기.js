/** 인잘 전달된 값이 배열인 경우 */

function solution(array) {
  // sort에 오름차순으로 배열을 정렬하는 콜백 전달
  // retrun -> 오름차순으로 정렬된 rest 배열
  // 0번째 인덱스에 해당하는 가장 작은 수를 answer에 대입

  const [answer] = array.sort((a, b) => a - b);

  return answer;
}

console.log(solution([5, 3, 7, 11, 2, 15, 17]));
