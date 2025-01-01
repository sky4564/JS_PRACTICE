// 한줄요약
// slice = 기존에 배열변경 x // splice = 기존에 배열변경 o  




let s = ['apple', 'banana', 'orange', 'grape']
function splice(arr){
    console.log('splice')
    //splice 는 기존에 있는 배열을 변경    
    let splice = arr.splice(1,2, 'start')
    // 반환값은 제거한 요소를 담은 새로운 배열
    return splice
}

function slice(arr){
    console.log('slice')
    // 기존에 있는 배열을 변경하지 않고
    // 새로운 배열 생성

    let slice = arr.slice(1,2)
    // 반환값은 추출한 요소를 포함한 새로운 배열
    return slice
}


// console.log(splice(s))
console.log(slice(s))
console.log(s)