function test() {
    let json = {
        a: ' a val',
        b: ' b val',
        c: ' c val',
        d: ' d val',
    }
        
    let arr = Object.keys(json)    
    
    // const data = new URLSearchParams()    
    const data = new FormData()
    
    arr.forEach((key, index) => {        
        data.append(key, Object.values(json)[index])
    });

    console.log(data)
}

test()