let objeto= {
    valor1: 1,
    valor2:2,
    "valor3": 3
}
console.log(objeto);
// No  es un arreglo como tal
console.log(objeto[0]);
/*
Al no tener comillas busca acceder a una variable anteriormente
creada, en esta caso no existe, por lo tanto no pude acceder a ella
*/
console.log(objeto[valor1]);
//Accede al valor del atributo "valor1" de forma correcta
console.log(objeto["valor1"]);