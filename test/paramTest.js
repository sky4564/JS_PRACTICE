


// 테스트상세
// 파라미터를 받은이후 파라미터 값에 다른 값을 할당하여 반환 할수 있는가
// 결과 : YES

const data = {
    username: 'Jinho Kim',
    age: 25
};

const test = (p) => {
    if( p == 1){
        console.log('init value', p)
        p = 123
        console.log('assign value', p)
    }
    return p
}

console.log(test(1))
