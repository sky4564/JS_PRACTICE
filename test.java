import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;
 
public class Main {
 
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());
        int[] money = new int[2];
        
        //money[0] = 도우의 가격, money[1] = 각 토핑의 가격이 된다.
        for(int i=0; i<2; i++) {
            money[i] = Integer.parseInt(st.nextToken());
        }
        
        int kcal_dou = Integer.parseInt(br.readLine());
        
        int[] kcal_top = new int[N];
        
        for(int i=0; i<N; i++) {
            st = new StringTokenizer(br.readLine());
            kcal_top[i] = Integer.parseInt(st.nextToken());
        }
        //맨 처음 도우만 사용했을 때의 열량
        int total_price = money[0];
        int kcal = kcal_dou;
        int price_per_kcal = kcal/total_price;
        
        int new_total_price = money[0];
        int new_kcal = kcal_dou;
        int new_price_per_kcal = new_kcal/new_total_price;
        
        //토핑이 열량이 높은 순서부터 추가하기위해 정렬을 한다.
        Arrays.sort(kcal_top);
        
        for(int i=0; i<N; i++) {
            //새로운 토핑을 추가한 new_price_per_kcal을 구해서 현재의 1원당 열량과 차이를 비교한다.
            new_total_price += money[1];
            new_kcal += kcal_top[kcal_top.length-1-i];
            new_price_per_kcal = new_kcal/new_total_price;
            
            if(new_price_per_kcal >= price_per_kcal) {
                price_per_kcal = new_price_per_kcal;
                kcal = new_kcal;
                total_price = new_total_price;
            } else {
                break;
            }
        }
        
        System.out.println(price_per_kcal);
        
    }
 
}