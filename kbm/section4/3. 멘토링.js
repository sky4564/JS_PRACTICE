function solution(test){
    let answer =0;
    
    // 이해하는데 쫌 시간이 걸림
    // 반복문을 뭔가 쫌 딱딱하게 이해를 하고있어서 그 부분을 꺠는데 시간이 걸림
    // 반복을 돌면서 특정 동작을 수행한다고 생각  i , j 부분에서 수행동작이 없어서 혼돈
    // 현재 문제는 ij 를 통해서 인원배치를 하고 그 인원 한명한명에대해서 ks 이중포문으로 완전탐색을 실시함
    // ij 이중포문은 2차원배열에 인원배치를 위함이였음 따로 분리해서 생각해서 이해가 쉬워짐

    //식 작성은 1.for문 작성 = > 2.수행동작 실행 -> 3.조건 적용 -> 4.조건적용에 따른 값 초기화 -> 5.반복문 정상작동 확인 -> 6.answer에 대입 정도
    
    let m = test.length   //길이 : 3 
    let n = test[0].length   // 길이 : 4 
    
    for(let i =1; i <= n; i++) { //1
        for(let j =1; j <= n; j++){ //1
            let cnt = 0; //4
            for(let k =0; k < m; k++){ //1
                let pi=pj=0 //4
                for(let s =0; s < n; s++){ //1
                    if(test[k][s] === i ) pi = s; //2 ,3
                    if(test[k][s] === j ) pj = s; // 2 ,3 
                }
                if(pi<pj) cnt++ // 2,3
            }
            if(cnt ===m) answer++; // 2.3
        }
    }
    return answer; // 5, 6
}

let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));
