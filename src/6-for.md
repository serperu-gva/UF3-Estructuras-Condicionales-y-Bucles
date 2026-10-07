# 6. Bucle for

El bucle for se codifica de la siguiente forma:

<div style="display: flex; gap: 50px">

<div style="flex: 1; padding: 10px; text-align: justify;">

  ::: tabs
  == Java

```java
for(inicialización;condición;incremento){
    //bloque de instrucciones
}
```

  :::

</div>

  ![Bucle for](/uf4/bucle_for.jpg)

</div>

La cláusula **inicialización** es una instrucción que se ejecuta una sola vez al inicio del bucle, normalmente para inicializar un contador. Por ejemplo **int i = 1;**

La cláusula **condición** es una expresión lógica que se evalúa al inicio de cada iteración del bucle. En el momento en que esta expresión se evalúe a false, se dejará de ejecutar el bucle y el control del programa pasará a la siguiente instrucción (a continuación del bucle for). Se utiliza para indicar la condición que debe cumplirse para que el bucle continúe. Por ejemplo **i <= 10;**

La cláusula **incremento** es una instrucción que se ejecuta al final de cada iteración del bucle (después del bloque de instrucciones). Generalmente se utiliza para incrementar o decrementar el contador. Por ejemplo `i++;` (incrementar i en 1).

>***Ejemplo 1***:  
>Bucle que muestra por pantalla los números naturales del 1 al 10:
>::: tabs
>
>== Java
>
>```java
>for (int i = 1; i <= 10 ; i++) {  
>   System.out.println(i);
>}
>```
>
>:::
>
>- En la inicialización utilizamos **int i=1** para crear la variable i con un valor inicial de 1.
>- La condición **i<=10** indica que el bucle debe repetirse mientras i sea menor o igual que 10.
>- La actualización **i++** indica que, al final de cada iteración, i debe incrementarse en 1.

>***Ejemplo 2***:  
>Programa que muestra los números naturales (1,2,3,4,5,6,...) hasta un número introducido por teclado:
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
>   int max;
>   System.out.print("Introduce el número máximo: ");
>   max = sc.nextInt();
>   for (int i=1; i<=max; i++)
>       System.out.println("Número: " + i);
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