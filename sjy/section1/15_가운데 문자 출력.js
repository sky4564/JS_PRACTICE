function solution(item) {
  let answer;
  const middleNumber = Math.floor(item.length / 2);

  console.log(middleNumber);

  if (item.length % 2 === 0) {
    /** substr */
    // 첫 번째 인자로 전달받은 index부터 length 길이만큼 string을 잘라내어 반환
    answer = item.substr(middleNumber - 1, 2);
  } else {
    answer = item.substr(middleNumber, 1);
  }

  return answer;
}
console.log(solution("studyisgoo"));
