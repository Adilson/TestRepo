import java.*;
import java.io.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) throws IOException {
        IntStream.range(0, 4).forEach(System.out::println);
        System.out.println("Waiting");
        System.in.read();
    }
}