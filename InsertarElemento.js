
let arregloElementos =[];
let textArregloFinal = document.getElementById("arregloFinal");

let textArreglo = document.getElementById("my_P_Arreglo");

function crearArreglo(){
    let elementosString = document.getElementById("myTextFieldElementos").value;
    textArregloFinal.innerHTML="";

    arregloElementos = elementosString.split(",");

    console.log(arregloElementos);
    textArreglo.innerHTML = arregloElementos;
    
}

function insertarElementoArreglo() {
    let elementoTextField = document.getElementById("textFieldElementoAñadido").value;
    let posicionInsertada = document.getElementById("idIndex").value;
    
    console.log(arregloElementos);
    textArregloFinal.innerHTML="";

    let arreglo = arregloElementos;
    arreglo.splice(posicionInsertada-1,0,elementoTextField);


    
    textArregloFinal.innerHTML = arreglo;
    console.log(arreglo);
}