# 3. Operador ternario

Este operador ternario permite devolver valores en función de una expresión lógica. Tiene la siguiente sintaxis:

`expresioLogica ? expresio_1 : expresio_2`

Si el resultado de evaluar la expresión lógica es verdadero, devuelve el valor de la primera expresión y, en caso contrario, devuelve el valor de la segunda expresión. Como veremos más adelante, es equivalente a una estructura alternativa doble:

::: tabs
== Java

```java
if (expresioLogica) { 
    valor = expresio_1; 
} else { 
    valor = expresio_2; 
}
```

:::

|Operador|Descripción|Ejemplo de expresión|Resultado del ejemplo|
|--------|----------|-------------------|---------------------|
|?|operador condicional|a = 4; <br> b = a == 4 ? a+5 : 6-a; <br> b = a > 4 ? a*7 : a + 8; | <br> b vale 9 <br> b vale 12 |

>***Ejemplo con operador condicional:***
>
>::: tabs
>== Java
>
>```java
>public class UF04OperadorCondicional {
>    public static void main(String[] args) {
>
>        // Declaración de variables
>        int i = 1, j = 2, k;
>
>        // Proceso principal
>        k = i > j ? 2 * i : 3 * j + 1;
>        System.out.println("i = " + i);
>        System.out.println("j = " + j);
>        System.out.println("k = " + k);
>
>        i = 2;
>        j = 1;
>        k = i > j ? 2 * i : 3 * j + 1;
>        System.out.println("i = " + i);
>        System.out.println("j = " + j);
>        System.out.println("k = " + k);
>    }
>}
>```
>
>:::