public class fortest {

    public static void main(String[] args) {
        String s = "isTestString";
        System.out.println(s);
        for (char c : s.toCharArray()) {
            System.out.println(c);
        }

        conv("isString");
    }

    public static void conv(String s) {
        System.out.println(s);
    }
}
