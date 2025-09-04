function greeting() {
    //todo las variables solo son usadas dentro de aki 
    let username = 'Ana' 
    console.log(username)
    if(username === 'Ana'){
        console.log( `hello ${username}`)
    }
    
}
greeting()
console.log(username); // aki no vamos a pode acceder por el alcance de la fucio
//solo esta dentro de la función 

