// 테스트상세
// 파라미터를 이름 지어서 보낼 수 있는가 ? 
// 결과 : YES  
// 설명 : ES6(ECMAScript 2015)부터는 객체 디스트럭처링(destructuring)을 사용하여 객체의 속성을 이름에 따라 매칭시킬 수 있습니다. 

const test = ({ username, age,id }) => {
    console.log('init value', username, age, id)
}

const data = {
    username: 'Jinho Kim',
    age: 25,
    id: 'asd'
};

// objcet 를 파라미터로 넣는다. 
console.log(test(data))
