let arr =[1,2,3,4,5]

let tmp
tmp = arr[4]
arr[4] = arr[0]
arr[0] = tmp

console.log(arr)
