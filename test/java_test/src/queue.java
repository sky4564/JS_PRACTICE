import java.util.*;

//First in  first out FIFO
public class queue   {
    /**
     * @param args
     */
    public static void main(String[] args) {
        Queue <Integer> Qbox = new LinkedList<>();
        Qbox.offer(1);
        Qbox.offer(2);
        Qbox.offer(3);
        Qbox.offer(4);
        Qbox.offer(5);
        System.out.println(Qbox);

        Qbox.poll();
        System.out.println(Qbox);
        Qbox.poll();
        System.out.println(Qbox);
        Qbox.poll();
        System.out.println(Qbox);
        Qbox.poll();
        System.out.println(Qbox);
    }
}