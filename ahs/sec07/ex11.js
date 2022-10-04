// 뮤직비디오 (결정알고리즘)
// DVD의 최소 용량 크기 출력

// https://leehyungi0622.github.io/2021/04/20/202104/210420-Algorithm_decision_tree/
function decisionAlgorithm(numbers) {
    // 총 몇 개의 그룹으로 나눠지는지 판별하는 함수
    const count = (arr, mid) => {
        // 처음 그룹
        let cnt = 1;
        let sum = 0;
        for (let n of arr) {
            // sum + n의 값이 한계값을 초과하는 경우,
            if (sum + n > mid) {
                // 더하는 그룹의 갯수를 1증가
                cnt += 1;
                // 합계를 다음 더할 숫자 n으로 초기화
                sum = n;
            } else {
                // 아직 합계가 한계값을 초과하지 않은 경우,
                // 계속해서 sum에 값 n을 누적한다.
                sum += n;
            }
        }
        return cnt;
    }

    // 숫자 리스트의 최소 합과 최대 합을 구한다.
    // 숫자 리스트에서 최대값이 최소합
    let lt = Math.max(...numbers);
    // 숫자 리스트 전체 요소들의 합이 최대합
    let rt = numbers.reduce((acc, n) => acc + n, 0);
    const target = 3;
    let answer = 0;
    while (lt <= rt) {
        // 최소합 ~ 최대합의 중간 값부터 탐색을 시작
        let mid = Math.floor((lt + rt) / 2);
        // 조건 그룹 갯수보다 작거나 같은 경우,
        if (count(numbers, mid) <= target) {
            // 해당 합계는 answer가 될 수 있는 조건을 충족
            answer = mid;
            // 조건을 만족하기 때문에 mid - 1을 최대 범위로 업데이트
            rt = mid - 1;
        } else {
            // 만약 조건을 만족하지 않은 경우, 최소값을 mid + 1로 업데이트
            lt = mid + 1;
        }
    }

    return answer;
}

// 강의풀이
/*
function count(songs, capacity) {
  let cnt = 1,
    sum = 0;
  for (let x of songs) {
    if (sum + x > capacity) {
      cnt++;
      sum = x;
    } else sum += x;
  }
  return cnt;
}

function solution(m, songs) {
  let answer;
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b, 0);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}
*/

let input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(decisionAlgorithm(input)); // 17
// (1, 2, 3, 4, 5) (6, 7), (8, 9)
