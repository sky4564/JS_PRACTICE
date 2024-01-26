function solution(arr) {
    let n = arr.length
    let el
    let el2
    let el3
    let el4
    let tmp = []
    let sum = 0
    let sum2 = 0
    let sum3 = 0
    let sum4 = 0
    for( let i = 0; i < n; i++){        
        console.log(i)
        el3 = arr[i][i]
        el4 = arr[i][4-i]
        sum3 += el3
        sum4 += el4
        for( let j = 0; j < n; j++){
            el = arr[i][j]
            el2 = arr[j][i]
            
            // console.log(el)
            sum += el
            sum2 += el2

        }
        tmp.push(sum)
        tmp.push(sum2)
        sum = 0
        sum2 = 0
    }
    tmp.push(sum3)
    tmp.push(sum4)
    sum3 = 0
    sum4 = 0
    tmp.sort((a,b) => b-a)
    return tmp[0]
}    
let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
