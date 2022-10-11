function solution(arr){

    for(let i = 1 ; i< arr.length; i++){
        let tmp = arr[i]
        let j
        for(j =i-1; j >=0; j--) {
            if(arr[j]>tmp) arr[j+1] = arr[j]
            else break
        }
        arr[j+1] = tmp
    }
    answer = arr
    return answer;
}
let arr=[11, 7, 5, 6, 10, 9];
console.log(solution(arr));