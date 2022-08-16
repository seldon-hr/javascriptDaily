console.log( undefined || '0' || null || (undefined ?? 0));
//Output '0', this case
/* 
El operador de corto circuito OR (||) solo se ejecuta si el primer operando es falsy. El nullish coalescing operator (??) solo se ejecuta si el primer operando es nullish (null o undefined).

Vamos paso por paso:

undefined || "0": undefined evalua como falsy entonces tendriamos "0". Nos quedaria el siguiente código:

  console.log("0" || null || (undefined ?? 0))  


"0" || null: "0" no evalua como falsy entonces no se ejecuta el operador de corto circuito. Nos quedaria el siguiente código:

  console.log("0" || (undefined ?? 0))  


undefined ?? 0: Operando tenemos como resultado 0 por que undefined es un valor nullish. Nos quedaria el siguiente código:

  console.log("0" || 0)  


Finalmente "0" como cadena no es un valor falsy entonces no podemos ejecutar el operador de corto circuito dando como resultado final "0".
*/