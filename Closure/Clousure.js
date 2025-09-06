// Luego vamosa pasar a un ejemplo como lo vamos 
/*
Permite accede al ambito de una funcion exterio desde una funcion interior 
en js, las clausura se crean cada vez que una fucnion es creada
*/
// A diferencias de otros conceptos no son siempre utilizados
// nos permite ofrecer diferentes formatos podemos tener nuevos metodo y logicas
// 
//Cuando una fucnion accde a una variabl fue de su contexto
//vamos aser una serie de elementos y como vamos ir anidando elementos dentro de una funcion 
 
const myGlobal = 0 ;
//una funciona  que  dentro va recibir otra funcion

function myFunction(){ //js  implementa el ambito lexico ambito lexico que tenemos
     const number = 1;
    console.log(myGlobal)

    function parent(){ // funcion interna 
        const inner = 2 
        console.log(number, myGlobal)
        function child(){
             console.log(inner,number,myGlobal)
        }
        return child()
    }
    return parent()
}
myFunction() ; //el ambito lexico  esta determinado por la s posiciones 
// y cuando vamos a poder tener el acceso  a esa información 

