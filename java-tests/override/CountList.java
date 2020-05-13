public class CountList extends SimpleList
{
    @Override
    public void test(){
        System.out.println("Novo teste");
    }
    @Override
    public void test2(){
        super.test2();
    }
    public static void main(String[] args) {
        CountList list = new CountList();
        list.test2();
    }
}