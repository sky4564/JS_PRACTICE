// 아나그램(해쉬)
// Anagram : 두 문자열의 알파벳 순서는 달라도 구성이 일치함

function solution(input) {
    let answer = "YES";

    let sH = new Map();
    for (let x of input[0]) {
        if (sH.has(x)) sH.set(x, sH.get(x) + 1);
        else sH.set(x, 1);
    }
    // console.log(sH);
    // input1 : Map(5) { 'A' => 2, 'b' => 1, 'a' => 1, 'e' => 2, 'C' => 1 }
    // input2 : Map(3) { 'a' => 2, 'b' => 1, 'C' => 2 }

    for (let x of input[1]) {
        if (!sH.has(x) || sH.get(x) == 0) return "NO";
        sH.set(x, sH.get(x) - 1);
    }
    
    return answer;
}

let input1 = ["AbaAeCe", "baeeACA"]; // YES
let input2 = ["abaCC", "Caaab"]; // NO
console.log(solution(input1));
console.log(solution(input2));