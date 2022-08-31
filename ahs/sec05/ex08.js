// 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
// 1. source문자열에서 target문자열 길이만큼 슬라이딩 윈도우로 부분문자열 추출
// 2. 부분문자열과 target문자열 비교

function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false; // key 종류가 다르기 때문에 false
  for (let [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) return false; // key가 다르거나, key가 값아도 value 값이 다르면 false
  }
  return true;
}
function solution(source, target) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();

  for (let x of target) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  // Map(3) { 'a' => 1, 'b' => 1, 'c' => 1 }

  let len = target.length - 1 // 2 

  for (let i = 0; i < len; i++) {
    if (sH.has(source[i])) sH.set(source[i], sH.get(source[i]) + 1);
    else sH.set(source[i], 1);
  }
  // Map(2) { 'b' => 1, 'a' => 1 }

  let lt = 0;
  for (let rt = len; rt < source.length; rt++) {
    // 추가
    if (sH.has(source[rt])) sH.set(source[rt], sH.get(source[rt]) + 1);
    else sH.set(source[rt], 1);
    
    // 비교
    if (compareMaps(sH, tH)) answer++; 

    // lt가 가리키는 값 빼고, 만약 값이 0이면 해당 값 삭제(없는 문자), 그리고 lt++
    sH.set(source[lt], sH.get(source[lt]) - 1);
    if (sH.get(source[lt]) === 0) sH.delete(source[lt]);
    lt++;
  }
  return answer;
}

let source = "bacaAacba";
let target = "abc";
console.log(solution(source, target)); // 3

// {bac} : true
// {aca} : false
// {caA} : false
// {aAa} : false
// {Aac} : false
// {acb} : true
// {cba} : true

// sH
// Map(3) { 'b' => 1, 'a' => 1, 'c' => 1 }
// Map(2) { 'a' => 2, 'c' => 1 }
// Map(3) { 'a' => 1, 'c' => 1, 'A' => 1 }
// Map(2) { 'a' => 2, 'A' => 1 }
// Map(3) { 'a' => 1, 'A' => 1, 'c' => 1 }
// Map(3) { 'a' => 1, 'c' => 1, 'b' => 1 }
// Map(3) { 'c' => 1, 'b' => 1, 'a' => 1 }

// tH
// Map(3) { 'a' => 1, 'b' => 1, 'c' => 1 }
// Map(3) { 'a' => 1, 'b' => 1, 'c' => 1 }
// Map(3) { 'a' => 1, 'b' => 1, 'c' => 1 }
// Map(3) { 'a' => 1, 'b' => 1, 'c' => 1 }
// Map(3) { 'a' => 1, 'b' => 1, 'c' => 1 }
// Map(3) { 'a' => 1, 'b' => 1, 'c' => 1 }
// Map(3) { 'a' => 1, 'b' => 1, 'c' => 1 }