import Cryptojs from "crypto-js"

const data = {
    username: 'Jinho Kim',
    age: 25
};

const test = (p) => {
    if( p == 1){
        console.log(p)
        p = 123
        console.log(p)
    }
    console.log('out p ', p)
    
}

test(1)
