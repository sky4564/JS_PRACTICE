function solution(item) {
  let answer;
  const middleNumber = Math.floor(item.length / 2);

  if (item.length % 2 === 0) {
    answer = item.substring(middleNumber - 1, 3);
  } else {
    answer = item.substring(middleNumber, 1);
  }

  return answer;
}
console.log(solution("good"));
