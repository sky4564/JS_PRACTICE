// 이진트리 순회 (깊이우선탐색)

function preorder(n) {
    let answer = "";
    function DFS(v) {
        if (v > 7) return;
        else {
            answer += (v + ' ');
            DFS(v * 2); 
            DFS(v * 2 + 1); 
        }
    }
    DFS(n);
    return answer;
}

function inorder(n) {
    let answer = "";
    function DFS(v) {
        if (v > 7) return;
        else {
            DFS(v * 2); 
            answer += (v + ' ');
            DFS(v * 2 + 1); 
        }
    }
    DFS(n);
    return answer;
}

function postorder(n) {
    let answer = "";
    function DFS(v) {
        if (v > 7) return;
        else {
            DFS(v * 2); 
            DFS(v * 2 + 1); 
            answer += (v + ' ');
        }
    }
    DFS(n);
    return answer;
}

console.log("preorder : ", preorder(1));
console.log("inorder : ", inorder(1));
console.log("postorder : ", postorder(1));