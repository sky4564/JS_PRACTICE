
import java.util.HashSet;
import java.util.Set;

// class MyData {
//     int v;

//     public MyData(int v) {
//         this.v = v;
//     }

//     @Override
//     public String toString() {
//         return ""+v;
//     }
    
// }

public class set {
    // 중복되는 값이 필요 없는 경우
    // 중복된 값을 허용하지 않는다. (값을 추가할때 규칙이 동작)
    //선형데이터구조 + 탐색 알고리즘

    public static void main(String[] args) {
        Set<Integer> list = new HashSet<>();
        list.add(1);
        list.add(2);
        list.add(3);

        System.out.println(list);    
        System.out.println(list.size());
    }
}
