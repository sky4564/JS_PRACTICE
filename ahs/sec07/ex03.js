// Special Sort(구글 인터뷰)
// 음의 정수는 앞으로, 양의 정수는 뒤로, 각 정수의 순서는 그대로

function specialSort(arr) {
    let positive = [];
    let negative = [];

    for (let x of arr) {
        if (x > 0) {
            positive.push(x);
        } else if (x < 0) {
            negative.push(x);
        } // 0은 입력되지 않음.
    }

    return negative.concat(positive);
}

let input = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(specialSort(input)); // -3, -2, -6, 1, 2, 3, 5, 6