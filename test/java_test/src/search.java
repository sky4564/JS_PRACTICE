import java.util.*;

public class search {
    public static void main(String[] args) {
        List<Integer> list = new LinkedList<>();

        for(int i = 50; i<100; i++){
            list.add(i);
        }
        System.out.println(list);
        System.out.println(list.indexOf(52));
    }
}
