function solution(item) {
  const answer = item.match(/[A-Z]/g).length;

  return answer;
}

let item = "KoreaTimeGood";
console.log(solution(item));
