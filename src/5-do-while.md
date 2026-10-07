# 5. Bucle do-while

El bucle do-while se codifica de la siguiente forma:

<div style="display: flex; gap: 50px">

<div style="flex: 1; padding: 10px; text-align: justify;">

  ::: tabs
  == Java

```java
do {
    //bloque de instrucciones
} while (condición);
```

  :::

</div>
<div style="flex: 0.5; padding: 10px; text-align: justify;">

  ![Bucle do-while](/uf4/bucle_do_while.jpg)

</div>
</div>

En este tipo de bucle, el bloque de instrucciones se ejecuta siempre al menos una vez, y dicho bloque de instrucciones se ejecutará mientras **condición** se evalúe a true.

**IMPORTANTE**: En el bloque de instrucciones deberá existir alguna iteración que, en algún momento, haga que `condición` se evalúe a `false`. Si no, ¡el bucle no terminaría nunca!

>**Ejemplo 4**: El mismo ejemplo 2 de antes, realizado con un bucle do-while sería:
>
>:::: tabs
>=== Java
>
>::: tabs
>== Código
>
>```java
>public static void main(String[] args){
>   Scanner sc = new Scanner(System.in);
>   int max, cont;
>   System.out.print("Introduce el número máximo: ");
>   max = sc.nextInt();
>   cont = 1;
>   
>   do {
>       System.out.println("Número: " + cont);
>       cont++;
>   } while (cont <= max)
>}
>```
>
>== Salida
>
>```plaintext
>Introduce el número máximo: 5
>Número 1
>Número 2
>Número 3
>Número 4
>Número 5
>```
>
>:::
>::::