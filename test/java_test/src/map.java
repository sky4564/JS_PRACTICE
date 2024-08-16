
import java.util.Hashtable;
import java.util.Map;

public class map {
    public static void main(String[] args) {        
        Map<String, Integer> map = new Hashtable<>();
        map.put("A",1);
        map.put("B",2);
        System.out.println(map);
        System.out.println(map.get("A"));
        System.out.println(map.get("C"));
        System.out.println(map.getOrDefault("A", 500));
        System.out.println(map.getOrDefault("C", 500));

    }
}
