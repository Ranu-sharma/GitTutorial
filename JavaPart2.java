import com.sun.source.doctree.SummaryTree;

import java.lang.annotation.ElementType;
import java.sql.SQLOutput;
import java.util.Scanner;
public class JavaPart2 {

   /* public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        int b = sc.nextInt();

        int sum = a + b;


        System.out.println(sum);
    }


        Scanner sc = new Scanner(System.in);

        int age = sc.nextInt();

        if (age > 18) {
            System.out.println("adult");
        } else {
            System.out.println("not adult");
        }

    }
    Check odd and even number


        Scanner sc = new Scanner(System.in);

        int num = sc.nextInt();

        if(num%2==0){
            System.out.println("it is an even number");
        }
        else{
                System.out.println("it is an odd number");

            }
            }


        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        int b = sc.nextInt();

        if (a == b) {
            System.out.println("equal");
        } else if (a > b) {
            System.out.println("a is greater");
        } else {
            System.out.println("b is greater");

        }



        Scanner sc = new Scanner(System.in);
        int button = sc.nextInt();

        switch (button) {
            case 1: {
                System.out.println("namaste");
                break;
            }
            case 2: {
                System.out.println("Hello");
                break;
            }

            case 3: {
                System.out.println("Bonjour");
                break;
            }
            default: {
                System.out.println("invalid Button");
            }

        }
        problem solving

       Scanner sc = new Scanner(System.in);

       int a = sc.nextInt();
       int b = sc.nextInt();

       int operator = sc.nextInt();

       switch(operator){
           case 1 : System.out.println(a+b);
           break;
           case 2 : System.out.println(a-b);
           break;
           case 3 :
               System.out.println(a*b);
               break;
           case 4:
               System.out.println(a/b);
               break;
           default:
               System.out.println(a%b);
       }







      for (int i=0; i<100; i++){
          System.out.println("hej");
      }


        int i = 0;
        while(i < 10){
            System.out.println("Ranu");
            i++;
        }


        int i = 12;
        do {
            System.out.println("VIMU");
        } while (i < 11);

    }



        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int sum = 0;

        for (int i=0; i<=n; i++) {
            sum = sum + i;
        }
            System.out.println(sum);


        Print the table of a number input by the user

        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        for (int i = 1; i < 11; i++) {


            System.out.println(i * n);
        }

    }

    question abut patterns

print a * rectangle


        for (int i = 1; i <= 4; i++) {
            for (int j = 1; j <= 5; j++) {
                System.out.print("*");
            }
            System.out.println();
        }


print a * half pyramid pattern

        int n = 4;
        for (int i = n; i>=1; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }

            System.out.println();
        }





    int n = 5;
    for(int i=1; i<=n; i++){
        for(int j=1; j<=n-i+1; j++){
            System.out.print(j+" ");
        }
        System.out.println();

        }


        public static void printMyName(String name) {
            System.out.println(name);
            return;
    }

    public static void main(String args[]) {
            Scanner sc= new Scanner(System.in);
            String name = sc.nextLine();
            printMyName(name);
    }
}


public static int ReturnSum (int a, int b) {
    int sum = a + b;

    return sum;
}
    public static void main(String args[]) {
    Scanner sc= new Scanner(System.in);
    int a= sc.nextInt();
    int b= sc.nextInt();
    int sum = ReturnSum(a, b);
        System.out.println(sum);
    }
}


    public static int ReturnValue (int a, int b) {
        return a * b;


    }
    public static void main(String args[]) {
        Scanner sc= new Scanner(System.in);
        int a= sc.nextInt();
        int b= sc.nextInt();
        System.out.println(ReturnValue(a, b));
    }

    Factorial

    public static void Factorial(int n) {
        if(n<0){
            System.out.println("invalid number");
            return;
        }
        int Factorial=1;

        for (int i = 1; i <= n; i++) {
            Factorial = Factorial*i;
        }
        System.out.println(Factorial);
        return;
    }
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        Factorial(n);

    }


    public static void Average(int a, int b, int c) {
        int Ans = (a + b + c) / 3;
        System.out.println(Ans);
        return;
    }

        public static void main (String args[]){
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
            Average(a, b, c);

            }

    }




public static void sumOfOdd(int n) {
    int sum = 0;

    for (int i = 0; i <= n; i++)
        if (i % 2 != 0) {
            sum = sum + i;

        }
}
        System.out.println(sum);
    public static void main(String args[]){
Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
sumOfOdd(n);

}
}


public static int MyFunction(int a, int b){


if(a < b) {
    return b;
}
    else{
            return a;
        }

        }
        public static void main(String args[]){
            Scanner sc = new Scanner(System.in);
            int a = sc.nextInt();
            int b = sc.nextInt();

            System.out.println(MyFunction(a, b));

}
}

*/

    public static boolean Eligibilty(int age){
        if(age < 18) {
            return false;
        }
            return true;
        }

        public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int age = sc.nextInt();

        System.out.println(Eligibilty(age));

}
}