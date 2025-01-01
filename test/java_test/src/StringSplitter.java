import java.util.*;

public class StringSplitter {
    public static List<String> splitStringMinimizeDuplicates(String input) {
        List<String> result = new ArrayList<>();
        List<String> sortedSubstrings = new ArrayList<>();
        
        StringBuilder currentSubstring = new StringBuilder();
        
        for (char c : input.toCharArray()) {
            currentSubstring.append(c);
            
            String current = currentSubstring.toString();
            System.out.println(current);

            //search 대상을 찾았을 때는 그 대상의 위치를,
            //만약 찾지 못했을때는 (- insertion point) - 1에 해당하는 값을 리턴하게 됩니다.
            int index = Collections.binarySearch(sortedSubstrings, current);
            if (index < 0) {  // 현재 부분 문자열이 존재하지 않음
                result.add(current);                                                                
                sortedSubstrings.add(-index - 1, current);  // 정렬된 위치에 삽입
                currentSubstring = new StringBuilder();
            }
        }
        
        // 마지막 부분 문자열 처리
        if (currentSubstring.length() > 0) {            
            result.add(currentSubstring.toString());
        }
        
        return result;
    }

    public static void main(String[] args) {
        String input = "abcabcabc";
        List<String> splits = splitStringMinimizeDuplicates(input);
        System.out.println(splits);
    }
}