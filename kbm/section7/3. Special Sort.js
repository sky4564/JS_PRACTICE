function solution(arr){
    for(let i =0; i < arr.length -1; i++ ){
        for(let j = 0 ; j < arr.length-1; j++){
            if(arr[j]> arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }            
        }
    }
    let answer = arr
    return answer;
}

let arr=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));    

