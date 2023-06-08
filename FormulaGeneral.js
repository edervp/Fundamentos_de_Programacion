function ingresaLosValores() {
    let a = document.getElementById("idA").value;
    let b = document.getElementById("idB").value;
    let c = document.getElementById("idC").value;
    let valores = [a,b,c]
    return valores;
}
function discriminante(a,b,c) {
    return (b*b)-4*a*c;
}

function ecuacionCuadratica() {
    let valores = ingresaLosValores();
    let soluciones = {x1:0,x2:0}
    let a = valores[0];
    let b = valores[1];
    let c = valores[2];
    let disc = discriminante(a,b,c);
    if(disc<0) alert("Sin solucion real")
    else {
        soluciones["x1"] =(-b + Math.sqrt(disc))/(2*a);
        soluciones["x2"] =(-b - Math.sqrt(disc))/(2*a);

    }

    let textResult = document.getElementById("idTextResult")
    textResult.innerHTML = ` x1= ${soluciones["x1"]} |  x2= ${soluciones["x2"]}`;
    
}