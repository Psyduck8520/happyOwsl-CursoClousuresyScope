// Que es el scope 
// global
//Determina la accesibilidd de las bariables globa function y block  scope y tenemos que enterde para sacarle ventaja 

///Las  variables como las funciones tambien son variables 
//Scope determina la accesibilidad de variales, objetos y funciones desde diferentes partes
// de codigo

var a  // estamos desclarando las variables
var b =  'b' // declaramos y asignamos
b = 'bb'  // reasiganacion
var a = 'aa' ; // rededclaracion 

//  global  scope

var fruit  = 'Apple' ; // aki tenemos una variable loca
function  bestFruit(){
    console.log(fruit)
}
 bestFruit() 

 //otra de las formas que podemos hbacer  es crear un variable global
 //tenemos
function countries() {
    country =  'Ecuador' // de esta manera estamos accediendo de manera global
    // por que no tiene  var, let o const esoes muy importante 
     console.log(country)

     
}

countries()
console.log(country) // si vamos a pode acceder a esto por lo que tenemos 
//que tener mucho cuidado