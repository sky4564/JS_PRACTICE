function solution(m, arr){
    let li = 0
    let ri = 0
    let sum = 0
    let ans = 0

    for( ri = 0 ; ri < arr.length; ri++){
        sum += arr[ri]
        if(sum < m) ans++
        else if(sum > m){
            while(sum <= m){
                
            }
        }
    }
}

let a=[1, 3, 1, 2, 3];
console.log(solution(5, a));
        