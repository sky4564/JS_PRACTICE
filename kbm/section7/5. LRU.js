function solution(size, arr){
    let cache = [0,0,0,0,0]
    for(let i = 0; i<arr.length; i++){        
        console.log(arr[i])
        let pos = -1
        
        for(let j = 0; j<size; j++){
            if(arr[i]===cache[j]) pos = j
        }

        if(pos !== -1){
            console.log(`캐시에 있음 ${arr[i]}`)
            cache.unshift(arr[i])
            if(cache.length > size) cache.pop()
        }else {
            console.log(`캐시에 없음 ${arr[i]}`)
            cache.splice(pos,1)
            cache.unshift(arr[i])
        }
        
    }
    return cache
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));