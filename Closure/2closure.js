function  greeting() {
    let username = 'oscar'
    function displayUserName(){
        return `hello ${username}`;
    }
    return displayUserName;
}
const  g = greeting();
console.log(g) // aqui lo que vamos hacer es imprimir el contexto
console.log( g()) // aqui si vamos a ejecutar la funcion 

