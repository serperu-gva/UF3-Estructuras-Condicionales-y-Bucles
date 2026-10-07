# Ejercicios

## Ejercicios - Nivel básico

### Ejercicio 1

**a)** Escribe un programa que, dado un número N introducido por teclado, muestre por pantalla todos los números del 1 hasta N.  
**b)** Modifícalo para que solo muestre los números pares.  
**c)** Modifícalo para que no muestre ni el 16 ni los múltiplos de 3.

### Ejercicio 2

**a)** Crea un programa que vaya pidiendo números hasta que se lea un 0.  
**b)** Añade una variable que contabilice cuántos números se han leído.  
**c)** Muestra cuántos de ellos han sido positivos.  
**d)** Muestra la media de todos los números leídos (sin contar el 0 final).

### Ejercicio 3

**a)** Escribe un programa que calcule y muestre el factorial de un número N, introducido por teclado.  
**b)** Permite que se vuelva a pedir el valor de N hasta que sea un número positivo.  
**c)** Añade una funcionalidad que muestre la secuencia de multiplicaciones que se realizan.

## Ejercicios - Nivel medio

### Ejercicio 4

Un grupo de amigos ha realizado un torneo y quiere registrar las puntuaciones.

**a)** El programa pide el nombre y puntuación de 4 jugadores y muestra quién ha conseguido la puntuación más alta.  
**b)** Muestra la media de las puntuaciones.  
**c)** Si hay alguna puntuación inferior a 5, muestra "Hay que mejorar" para esos jugadores.

### Ejercicio 5

En un centro de atención telefónica quieren saber cuántos clientes han valorado negativamente el servicio.

**a)** Escribe un programa que lea por teclado 10 valoraciones numéricas (−5 a +5) e indique si ha habido alguna negativa.  
**b)** Modifícalo para que también cuente y muestre cuántas son positivas, cuántas negativas y cuántas neutras (valoración de 0).  
**c)** Añade un mensaje en caso de que todas sean positivas: "¡Excelente!"  
**d)** Si alguna es −5, añadir "Revisión urgente necesaria".  

### Ejercicio 6

Queremos controlar los gastos mensuales de una casa.

**a)** El programa debe pedir tres gastos (luz, agua y comida) y mostrar el total mensual.  
**b)** Se amplía el programa para pedir también un cuarto gasto opcional (otros), y mostrarlo solo si es mayor que 0.  
**c)** Se amplía el programa para mostrar un resumen con porcentajes de cada gasto sobre el total.  

## Ejercicios - Nivel avanzado

### Ejercicio 7

En una biblioteca universitaria quieren digitalizar el sistema de control de préstamos. Cada libro tiene un código, un título y una fecha de devolución prevista. El programa debe gestionar la lista de préstamos abiertos y calcular posibles recargos por retraso.

**a)** Pide al usuario el código y el título de un libro, y la fecha de devolución prevista (día, mes, año). Muéstralo todo por pantalla.  
**b)** Añade la fecha de hoy y calcula si el libro está retrasado (fecha de hoy > fecha de devolución). Muestra por pantalla tanto si está retrasado como si no.  

- Considera que un mes tiene 30 días y un año tiene 365 días.
- Comprueba en orden: año, mes, día.

**c)** Si hay retraso, calcula el número de días de retraso y muestra un recargo de 0,50 € por día.  
**d)** Permite introducir varios préstamos hasta que el usuario escriba "fin", y acumula el total de recargos.  
**e)** Al final, muestra un resumen: número de libros prestados, libros retrasados y recargos totales.

::: tip NOTA:
Para comparar un String con la cadena "fin", usa la siguiente instrucción:  
`cadena.equals("fin")`  
Esta expresión devuelve `true` si el valor de cadena es igual a "fin", y `false` en caso contrario. No es correcto usar la doble igualdad `==` por motivos que se verán más adelante.
:::

### Ejercicio 8

Un departamento académico quiere un programa que calcule la nota final de un alumno teniendo en cuenta exámenes, prácticas y trabajos. Cada tipo tiene un peso diferente: exámenes 50 %, prácticas 30 % y trabajos 20 %. Además, si alguno de los tres componentes está por debajo de 4, el alumno suspenderá automáticamente.

**a)** Pide las tres notas (0–10) y calcula la nota ponderada simple.  
**b)** Añade la comprobación: si alguna nota < 4, muestra "Suspenso automático".  
**c)** Si no hay suspenso automático, muestra "Aprobado" o "Excelente" si la nota final ≥ 9.  
**d)** Permite repetir el cálculo para varios alumnos hasta que el usuario introduzca "fin".  
**e)** Al final, muestra cuántos alumnos han aprobado, han suspendido por nota baja y cuántos han obtenido Excelente.

### Ejercicio 9

Una empresa de servicios quiere automatizar la facturación mensual en función del uso y aplicar tramos de tarifas y un IVA específico. El coste por unidad varía según consumos:

- Hasta 100 unidades: 0,10 €
- De 101 a 500: 0,08 €
- Más de 500: 0,05 €

Además, se aplica un IVA del 21 %.

**a)** Pide el consumo mensual (unidades) y calcula el coste base sin IVA.  
**b)** Aplica el IVA y muestra el total con IVA incluido.  
**c)** Añade un descuento del 5 % si el consumo supera las 1000 unidades (sobre el total con IVA).  
**d)** Permite facturar para varios clientes hasta que el usuario introduzca "fin", y acumula el total facturado.  
**e)** Muestra un resumen: número de facturas, ingresos brutos, total de IVA y total de descuentos aplicados.

### Ejercicio 10

Una tienda de muebles en línea necesita un programa para procesar pedidos y controlar el inventario. Tienen un catálogo de productos con código (1, 2 o 3), nombre, precio y stock disponible. Cuando el usuario realiza un pedido, hay que restar unidades y calcular el total.

**a)** Carga un inventario inicial de tres productos (mesas, sillas y armarios) con un stock inicial de 100 unidades cada uno, y muestra la lista.  
**b)** Permite realizar un pedido: el usuario introduce el código del producto y la cantidad; si no hay stock suficiente, muestra "Stock insuficiente". Si el código no corresponde a ningún producto, muestra "Código incorrecto".  
**c)** Permite al usuario realizar tantos pedidos como quiera, hasta que el código introducido sea 0. En cada pedido se descuentan las unidades correspondientes del inventario.  
**d)** Si, al realizar un pedido, algún producto no tiene suficientes unidades en el inventario, mostrará un mensaje por pantalla.  
**e)** Después del pedido, muestra qué productos han quedado con stock 0.  
**f)** Al final, escribe un informe del valor total vendido y de los productos agotados.


<!--
---

## Ejercicios - Nivel básico

1. Realiza un programa que muestre por pantalla los 20 primeros números naturales (1, 2, 3... 20).
2. Realiza un programa que muestre los números pares comprendidos entre el 1 y el 200. Para ello utiliza un contador y suma de 2 en 2.
3. Realiza un programa que muestre los números pares comprendidos entre el 1 y el 200. Esta vez utiliza un contador sumando de 1 en 1.
4. Realiza un programa que muestre los números desde el 1 hasta un número N que se introducirá por teclado.

## Ejercicios - Nivel medio

5. Realiza un programa que lea un número positivo N y calcule y visualice su factorial N!
Siendo el factorial:
0! = 1  
1! = 1  
2! = 2 *1  
3! = 3* 2*1  
N! = N* (N-1) *(N-2)........* 3 *2* 1  
6. Realiza un programa que lea 10 números no nulos y después muestre un mensaje indicando si ha leído algún número negativo o no.
7. Realiza un programa que lea 10 números no nulos y después muestre un mensaje indicando cuántos son positivos y cuántos negativos.
8. Realiza un programa que lea una secuencia de números no nulos hasta que se introduzca un 0, y después muestre si ha leído algún número negativo, cuántos positivos y cuántos negativos.
9. Realiza un programa que calcule y escriba la suma y el producto de los 10 primeros números naturales.
10. Realiza un programa que lea una secuencia de notas (con valores que van de 0 a 10) que termina con el valor -1 y nos diga si hubo o no alguna nota con valor 10.
11. Realiza un programa que sume independientemente los pares y los impares de los números comprendidos entre 100 y 200, y después muestre por pantalla ambas sumas.
12. Realiza un programa que calcule el valor A elevado a B (A^B) sin hacer uso del operador de potencia (^), siendo A y B valores introducidos por teclado, y después muestre el resultado por pantalla.
13. Realiza un programa en el que el usuario "piense" un número del 1 al 100 y el ordenador intente adivinarlo. Es decir, el ordenador irá proponiendo números una y otra vez hasta adivinarlo (el usuario deberá indicarle al ordenador si es mayor, menor o igual al número que ha pensado).
14. Realiza un programa que, dada una cantidad de euros que el usuario introduce por teclado (múltiplo de 5 €), muestre los billetes de cada tipo que serán necesarios para conseguir dicha cantidad (utilizando billetes de 500, 200, 100, 50, 20, 10 y 5). Hay que indicar el mínimo de billetes posible. Por ejemplo, si el usuario introduce 145, el programa indicará que será necesario 1 billete de 100 €, 2 billetes de 20 € y 1 billete de 5 € (no será válido, por ejemplo, 29 billetes de 5, que aunque sumen 145 €, no es el mínimo número de billetes posible).

## Ejercicios - Nivel avanzado

15. Realiza un programa que cuente los múltiplos de 3 desde el 1 hasta un número que introducimos por teclado.
    - Ejemplo:

```plaintext
Dame un número: 13
Número de múltiplos de 3: 4
```

16. Realiza un programa en Java que pida un número primo positivo y nos diga si es primo o no.

```plaintext
Dime un número
Es primo
```

17. Realiza un programa que lea y acepte únicamente aquellos números que sean mayores que el último dado, es decir, el anterior introducido. La introducción de números finaliza con la introducción de un 0. Al final se mostrará:

     - El total de números introducidos, excluido el 0.
     - El total de números fallados

```plaintext
Dime un número inicial: 20
Dime un número: 21
Dime un número: 8
Error, es menor.
Dime un número: 15
Dime un número: 10
Error, es menor.
Dime un número: 0
Total de números introducidos: 5
Número de errores: 2
```

18. Realiza un programa para calcular la suma de los cuadrados de los 5 primeros números naturales.
19. Realiza un programa que lea un número y a continuación escriba el carácter "*" tantas veces como el valor numérico leído. En aquellos casos en los que el valor leído no sea positivo se deberá escribir un único asterisco.

```plaintext
Dime un número: 8
* * * * * * * *
```

20. Realiza un programa que pida un número entero N entre 0 y 20 y después muestre por pantalla los números desde 1 hasta N, uno en cada línea, repitiendo cada número tantas veces como su valor.

```plaintext
Dime un número: 5
1
22
333
4444
55555
```

21. Realiza un programa que pida dos números enteros A y B, siendo B mayor que A. Después visualice los números desde A hasta B e indique cuántos de estos son pares.

```plaintext
Dime un número: 5
Dime un número mayor que el anterior: 11
5 6 7 8 9 10 11
La cantidad de pares es: 3
```

22. Realiza un programa que pida un número y construya por pantalla su pirámide.

```plaintext
Dime un número para realizar su pirámide: 6
     *     
    ***
   *****
  *******
 *********
***********
```

## Ejercicios de ampliación

23. Escribe un programa que lea un número n de un dígito e imprima una pirámide de números con n filas como la siguiente.

Ejemplo:

```plaintext
   1   
  121
 12321
1234321
```

24. Escribe un programa que, dado un número entero positivo, nos diga cuántos son y cuánto suman los dígitos pares que contiene. Los dígitos pares se mostrarán ordenadamente de izquierda a derecha. Para hacerlo utilizaremos el tipo long en lugar del int para poder admitir números grandes.

Ejemplo:

```plaintext
Introduce un número entero positivo: 94026782
Dígitos pares: 4 0 2 6 8 2
La suma de los dígitos pares es: 22
```

25. Escribe un programa que diga si un número introducido por teclado es o no capicúa. Los números capicúa se leen igual hacia delante y hacia atrás. El programa aceptará números de cualquier longitud dentro de los permitidos en el tipo de datos long.

Ejemplo:

```plaintext
Introduce un número entero positivo: 2019102
El 2019102 es capicúa.
```

26. Realiza un programa que calcule el máximo, mínimo y media de una serie de números enteros positivos introducidos por teclado. El programa terminará cuando el usuario introduzca un número primo. Este último número no se tendrá en cuenta para los cálculos. El programa debe indicar también cuántos números ha introducido el usuario (sin contar el número primo que sirve para salir).

Ejemplo:

```plaintext
Introduce números enteros positivos. Para finalizar, introduce un número primo:
Introduce número: 6
Introduce número: 8
Introduce número: 15
Introduce número: 12
Introduce número: 23
Has introducido 4 números no primos.
Máximo: 15
Mínimo: 6
Media: 10.25
```

27. Implementa el juego piedra, papel y tijera. Primero, el usuario introduce su jugada y después el ordenador genera aleatoriamente una de las opciones. Si el usuario introduce una opción incorrecta, el programa deberá mostrar un mensaje de error.

-->