function sum(num1, num2 = num1) {
    console.log(num1 + num2);
}

sum('🥑');

/* 
    Desde ES6 es posible usar paámetros por defecto (siempre y cuando sean los últimos declarados en la funcióhn).
    En este caso el párametro por defecto num1 es el mismo que el primer parámetro, no hay ningun problema
    siempre y cuando este declarado al final de la lista de parámetros de la función.

    Pasamnois el argumento 10 a la función sum, esto significa que num2 deberá usar su valor por defecto que
    seria el msimo de num1, osea 🥑; entonces 🥑 + 🥑 nos das el resultado final 🥑🥑
*/