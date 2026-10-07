# Ejercicio: Conjetura de Collatz

## ✅ Enunciado
La **Conjetura de Collatz** dice:
> Comienza con cualquier número positivo. Si es par, divide entre 2; si es impar, multiplica por 3 y suma 1. Repite hasta llegar a 1.

**Objetivo:**  
- Mostrar la secuencia completa desde el número inicial hasta 1.
- Contar cuántos pasos hace para llegar a 1.

**Bucles a utilizar:**  
- `while` → para repetir hasta llegar a 1.
- `for` → para probar varios números (opcional, para alumnos avanzados).

---

## ✅ Pasos a seguir
1. Pide al usuario un **número positivo** (validar con `while`).
2. Guarda el número inicial en una variable.
3. Muestra un mensaje: *"Secuencia de Collatz para el número X:"*.
4. Utiliza un **bucle `while`**:
   - Si el número es par → divide entre 2.
   - Si es impar → multiplica por 3 y suma 1.
   - Muestra cada valor de la secuencia.
   - Incrementa un contador de pasos.
5. Cuando llegues a 1, muestra:
   - La secuencia completa.
   - El número total de pasos.

---

## ✅ Ejemplo de ejecución
>
>  Introduce un número positivo: 6
>
>  Secuencia de Collatz para el número 6:
>
>  6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1
>
>  Número total de pasos: 8