// fue incorparado en enmacscript 5 y podemos tener  reglas
//para asignacion de las variables,  recordamos que nuestro codigo
// pude esta listo o esperando un logica que no sea la correcta
// js  FUE creado en una semana como una propuesta
// hoy en dia cada año tenemos una actualización constante.

pi = 3.1416;
console.log(pi) // hemos echo la asignacion sin la declaración 

// pero si lo usamos de la siguiente manera no nos va dejar ejecutar
'use strict';
pi2 = 3.1418
console.log(pi2) //  aki nos salda is on defined  tenemos que asignar y  declarar 

//tambien podemos  hacer uso dentro de  nuestra función
function myFunction(){
    'use strict'
    return pi = 3.14
}

console.log(myFunction) //tambien  no me va dejar imprimir 