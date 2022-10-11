function solution(arr){    
    for(let i =0; i <arr.length; i++){
        let idx = i
        for(let j = i+1; j < arr.length; j++){
            if(arr[idx]>arr[j]){
                [arr[idx],arr[j]] = [arr[j], arr[idx]]
            }
        }        
    }
    let answer = arr
    return answer;
}
let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));