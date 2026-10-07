# 4. Bucle while

El bucle while se codifica de la siguiente forma: 

<div style="display: flex; gap: 50px">

<div style="flex: 1; padding: 10px; text-align: justify;">

  ::: tabs
  == Java

```java
while (condición) {
    //bloque de instrucciones
}
```

  :::

</div>
<div style="flex: 0.5; padding: 10px; text-align: justify;">

  ![Bucle while](/uf4/bucle_while.jpg)

</div>
</div>

El bloque de instrucciones se ejecuta mientras se cumple una condición (mientras condición se evalúe a true). **La condición se comprueba ANTES de comenzar** a ejecutar el bucle por primera vez, por lo que si se evalúa a false en la primera iteración, entonces el bloque de acciones no se ejecutará ninguna vez. El mismo ejemplo 2 de antes, realizado con un bucle while sería:

>**Ejemplo 3**:
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
>   while (cont <= max){
>       System.out.println("Número: " + cont);
>       cont++;
>   }
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