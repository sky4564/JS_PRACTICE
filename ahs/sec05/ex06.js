// 학습 회장(해쉬)

function solution(votes) {
    let answer;
    let hashMap = new Map();
    for (let v of votes) {
        if (hashMap.has(v)) hashMap.set(v, hashMap.get(v)+1);
        else hashMap.set(v, 1);
    }
    console.log(hashMap); // Map(5) { 'B' => 3, 'A' => 3, 'C' => 5, 'D' => 2, 'E' => 2 }

    let max = Number.MIN_SAFE_INTEGER;
    for (let [key, value] of hashMap) {
        if (value > max) {
            max = value;
            answer = key;
        }
    }

    return answer;
}

let input = "BACBACCACCBDEDE";
console.log(solution(input)); // C