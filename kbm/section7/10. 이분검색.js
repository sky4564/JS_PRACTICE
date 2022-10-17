function solution(target, arr){
    let ans = 0
    arr.sort( (a,b) =>a-b)
    console.log(arr)
    let lt = 0
    let rt = arr.length -1    
    // let mid = parseInt((lt+rt)/2)
    // 여기서 돌리면 무한루프  while 조건이 고정되기때문
    while(lt<=rt){
        let mid = parseInt((lt+rt)/2)
        // mid 의 선언부분 위치의 중요성
        // lt , rt 가 while문 안에서 변경됨으로 
        // lt , rt 의 영향을 받는값인 mid도 while문 안에 할당되어야 한다.
        console.log(mid)
        if(arr[mid] === target){
            ans = mid+1
            break
        }
        else if(arr[mid]>target) rt = mid-1
        else lt = mid+1
    }

    return ans
    
}

let arr=[23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
