function Msolution(arr){
    let osum = 0;
    let min
    let oddArr = []
    
    for(let i = 0 ; i < arr.length; i++) {
        if(arr[i]%2 !== 0) {
            osum += arr[i]            
            oddArr.push(arr[i])
        }        
    }
    min = Math.min(...oddArr)
    // -> 값을 특정하지 못해서 로직이 길어진 모습이다.
    
    
    
    
    let answer=[osum, min];

    return answer;
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(Msolution(arr));

// Tsol 중 for of 를 사용 for 와 for of 의 차이점은 ? 
// -> arr[i] 를 사용 안함으로 식이 짧아진다.

function Tsolution(arr){
    let osum = 0;
    let min = Number.MAX_SAFE_INTEGER
    // - > 값을 특정할수 없을떄 기준값이 되어준다. 
    
    
    for(let x of arr){
        if(x%2 !== 0) {
            osum += x
            if(x < min) min = x
        }        
    }
    
    
    let answer=[osum, min];

    return answer;
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(Tsolution(arr));