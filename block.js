function fruits(){
    if (true) {
        var  fruit1 ='apple' //function scope , tenemos que tener encuenta
        let  fruit2  = 'kiwi' // block scope 
        const fruit3  =  'banana' // block scope
    }
    console.log(fruit1) // este si se va imprimir
    console.log(fruit2) // los demas no podemo  ver 
    console.log(fruit3)
}

fruits()