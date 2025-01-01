
import java.util.Arrays;
import java.util.HashSet;
import java.util.Hashtable;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class read {

    public static void main(String[] args) {
        // setList();
        rotation();
        // search();/
    }

    public static void mapList() {
        Map<String, Integer> map = new Hashtable<>();
        map.put("A",1);
        map.put("B",2);
        System.out.println(map);
        System.out.println(map.get("A"));
        System.out.println(map.get("C"));
        System.out.println(map.getOrDefault("A", 500));
        System.out.println(map.getOrDefault("C", 500));
    }

    public static void setList() {
        Set<Integer> list = new HashSet<>();
        list.add(2);
        System.out.println(list);
    }

    public static void rotation() {

        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
        }
        System.out.println("---------------------");

        int testarr[] = {1, 2, 3, 4, 5, 6, 7};
        System.out.println(Arrays.toString(testarr));
        for (int a : testarr) {
            System.out.println(a);
        }
    }

    public static void search() {
        List<Integer> list = new LinkedList<>();
        for (int i = 50; i < 100; i++) {
            list.add(i);
        }
        System.out.println(list.indexOf(75));
    }

}
