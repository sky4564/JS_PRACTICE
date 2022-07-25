function solution(str) {
  const answer = parseInt(str.replace(/[^0-9]/g, ""));
  return answer;

  /** 선생님 풀이
   * for of반복문으로 문자열 하나씩 반복하여 isNaN의 인자로 전달하여 숫자만 추출
   * 결과값을 문자열로 받지 않고 숫자로 받는 방법으로 아래와 같은 방법 사용하여 
   * 숫자가 추가될 때마다 기존 값에 10을 곱하여 자릿수를 늘린 후 숫자를 더하는 방식 사용
   * 
   * let ans = 0
    for(let x of str){
        if(!isNaN(x)) ans = ans*10 + Number(x)
    }
    return ans
   */
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
