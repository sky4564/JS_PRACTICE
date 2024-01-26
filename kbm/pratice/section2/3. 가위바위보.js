//1 = 가위 , 2 = 바위 , 3 = 보
// 이긴사람 출련 비기면 D
function solution(a, b) {
    let ans = ''
    for(let i =0; i < a.length; i++){
        if(a[i] == b[i]) ans += 'D'
        else if (a[i] == 1 && b[i] == 3) ans += 'A'
        else if (a[i] == 2 && b[i] == 1) ans += 'A'
        else if (a[i] == 3 && b[i] == 2) ans += 'A'
        else ans += 'B'

    }
    return ans
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
