function solution(arr){
    let answer=arr;
    for(let i=0; i<arr.length; i++){
        let tmp=arr[i], j;
        for(j=i-1; j>=0; j--){
            if(arr[j]>tmp) arr[j+1]=arr[j];
            else break;
        }
        arr[j+1]=tmp;
    } 
    return answer;
}
let arr=[11, 7, 5, 6, 10, 9];
console.log(solution(arr));



function solution(arr2){
    let answer=[];
    answer.push(arr2[0]);
    for(let i=1; i<arr2.length; i++){
        for(let j=0; j<answer.length; j++){
            if(arr2[i]<answer[j]){
                answer.splice(j, 0, arr2[i]);
                break;
            } 
        }
    }
    return answer;
}
let arr2=[11, 7, 5, 6, 10, 9];
console.log(solution(arr));