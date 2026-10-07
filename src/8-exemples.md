# 8. Ejemplos

## 8.1. Ejemplo 1

Programa que muestre por pantalla los 20 primeros números naturales (1, 2, 3… 20).

:::: tabs
=== Java

::: tabs
== Diagrama de flujo

![Ejemplo 1](/uf4/ejemplo1.jpg)

== Código

```java
public class Ejercicio1{
    public static  void main(String[] args){
        int contador;

        for(contador=1;contador<=20;contador++)
            System.out.print(contador + " ");

        System.out.print("\n");
    }
}
```

== Salida

```plaintext
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
```

:::
::::

## 8.2. Ejemplo 2

Programa que suma independientemente los pares y los impares de los números comprendidos entre 100 y 200.

:::: tabs
=== Java

::: tabs
== Diagrama de flujo

![Bucle do-while](/uf4/Exemple2.jpg)

== Código

```java
public class Ejercicio2{
    public static void main(String[] args){
        int pares, impares, contador;

        pares = 0;
        impares = 0;

        for(contador=100;contador<=200;contador++){
            if(contador % 2 == 0)
                pares = pares + contador;
            else
                impares = impares + contador;
        }

        System.out.println("La suma total de los pares es: " + pares);
        System.out.println("La suma total de los impares es: " + impares);
    }
}
```

== Salida

```plaintext
La suma total de los pares es: 7650
La suma total de los impares es: 7500
```

:::
::::

## 8.3. Ejemplo 3

Muestra los números múltiplos de 5 de 0 a 100 utilizando el bucle for.

### 8.3.1. Código

:::: tabs
=== Java

::: tabs
== Código

```java
public class UF04Ejemplo01 {
    public static void main(String[] args) {
        for(int i = 0; i <= 100; i += 5) {
            System.out.print(i + " ");
        }
    } 
}
```

== Salida

```plaintext
0 5 10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100
```

:::
::::

## 8.4. Ejemplo 4

Muestra los números del 320 al 160, contando de 20 en 20 hacia abajo utilizando el bucle while.

:::: tabs
=== Java

::: tabs
== Código

```java
public class UF05Ejemplo02 {
    public static void main(String[] args) {

        int i = 320;

        while(i >= 160) {
            System.out.println(i);
            i-=20;
        }
    }
}
```

== Salida

```plaintext
320
300
280
260
240
220
200
180
160
```

:::
::::

## 8.8. Ejemplo 5

Realiza un programa que pida un número por teclado y después nos muestre el número al revés.

:::: tabs
=== Java

::: tabs
== Código

```java
import java.util.Scanner;

public class UF05Ejemplo03 {
    public static void main(String[] args) {

    // Declaración de variables
    int numero, auxiliar, reves;
    Scanner entrada = new Scanner (System.in);

    // Petición de datos
    System.out.print("Introduce un número entero: ");
    numero = entrada.nextInt();

    // Inversión del número
    reves = 0;
    auxiliar = numero;

    while (auxiliar>0){
        // Extrae el dígito más bajo y lo coloca como el más alto en reves
        reves = (reves*10) + (auxiliar%10);
        // Eliminamos el dígito más bajo y procesamos el resto del número
        auxiliar = auxiliar/10; }
        System.out.println("El número " + numero + " invertido es " + reves);
        entrada.close();
    }
}
```

== Salida

```plaintext
Introduce un número entero: 12345
El número 12345 invertido es 54321
```

:::
::::

## 8.6. Ejemplo 6

Crea un programa que piense un número al azar entre 0 y 100. El usuario debe adivinarlo y tiene para ello 5 oportunidades. Después de cada intento fallido, el programa dirá cuántas oportunidades quedan y si el número introducido es menor o mayor que el que ha pensado.

:::: tabs
=== Java

::: tabs
== Código

```java
import java.util.Scanner;

public class UF04Ejemplo04{
    public static void main(String[] args) {

        // Declaración de variables
        final int OPORTUNIDADES = 5;
        int numeroUsuario, numeroMisterioso, intento;
        boolean acertado = false;
        Scanner entrada = new Scanner (System.in);

        // Número al azar
        numeroMisterioso = (int)(Math.random() * 101);

        // Petición del número y cálculo
        System.out.println("Estoy pensando un número entre el 0 y el 100. Tienes 5 oportunidades para adivinarlo.");
        intento=OPORTUNIDADES;

        do {
        System.out.print("Introduce un número: ");
        numeroUsuario = entrada.nextInt();
        intento--;

        if (numeroUsuario == numeroMisterioso) {
            acertado = true;
            System.out.println("¡Enhorabuena! ¡Has acertado!");
        } else {
            if (numeroUsuario < numeroMisterioso){
                System.out.println("El número que estoy pensando es mayor que " + numeroUsuario);
            } else {
                System.out.println("El número que estoy pensando es menor que " + numeroUsuario);
            }
            System.out.println("Te quedan " + intento + " oportunidades"); 
        }
        } while (!acertado && (intento > 0));

        if (!acertado) {
            System.out.println("Lo siento, no has acertado. El número era el " + numeroMisterioso);
        }
    }
}
```

== Salida

```plaintext
Estoy pensando un número entre el 0 y el 100. Tienes 5 oportunidades para adivinarlo.
Introduce un número: 50
El número que estoy pensando es mayor que 50
Te quedan 4 oportunidades
Introduce un número: 70
El número que estoy pensando es mayor que 70
Te quedan 3 oportunidades
Introduce un número: 85
¡Enhorabuena! ¡Has acertado!
```

:::
::::

## Ejemplo do-while

::: tabs
== Java

```java
package ejemploMenuOpciones;

import java.util.Scanner;
/**
* Programa que muestra un menú de opciones para realizar operaciones. El menú
* se repetirá hasta que se introduzca la opción 5.
*/
public class EjemploMenuOpciones {
    public static void main(String[] args) {

        int opcion, numero1, numero2, suma, resta, multiplicacion, division;
        Scanner entrada = new Scanner(System.in);

        do {
            System.out.println("¿Qué quieres hacer? ");
            System.out.println("1. Sumar");
            System.out.println("2. Restar");
            System.out.println("3. Multiplicar");
            System.out.println("4. Dividir");
            System.out.println("5. Salir");
            System.out.print("Introduce opción: ");
            opcion = entrada.nextInt();

            switch (opcion) {
            case 1: // Sumar
                System.out.println("--Suma de dos enteros--");
                System.out.print("Introduce un número: ");
                numero1 = entrada.nextInt();
                System.out.print("Introduce otro número: ");
                numero2 = entrada.nextInt();
                suma = numero1 + numero2;
                System.out.println("La suma es: " + suma);
                break;

            case 2: // Restar
                System.out.println("--Resta de dos enteros--");
                System.out.print("Introduce un número: ");
                numero1 = entrada.nextInt();
                System.out.print("Introduce otro número: ");
                numero2 = entrada.nextInt();
                resta = numero1 - numero2;
                System.out.println("La resta es: " + resta);
                break;

            case 3: // Multiplicar
                System.out.println("--Multiplicación de dos enteros--");
                System.out.print("Introduce un número: ");
                numero1 = entrada.nextInt();
                System.out.print("Introduce otro número: ");
                numero2 = entrada.nextInt();
                multiplicacion = numero1 * numero2;
                System.out.println("La multiplicación es: " + multiplicacion);
                break;

            case 4: // Dividir
                System.out.println("--División de dos enteros--");
                System.out.print("Introduce un número: ");
                numero1 = entrada.nextInt();
                System.out.print("Introduce otro número: ");
                numero2 = entrada.nextInt();
                if (numero2 != 0) {
                    division = numero1 / numero2;
                    System.out.println("La división es: " + division);
                } else {
                    System.out.println("Error: División entre 0.");
                }
                break;

            case 5: // Salir
                System.out.println("¡Adiós!");
                break;

            default: // En otro caso
                System.out.println("Error: opción incorrecta.");
            }

        } while (opcion !=5);
    }
}
```

:::