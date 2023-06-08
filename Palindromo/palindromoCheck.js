function palindromeChecker() {

    let str = document.getElementById("idOracion").value;

    const soloLetras = str
        .toLowerCase()//hacer todas minusculas
        .match(/[a-z0-9]/g);//  para solo aceptar letras y numeros

    // devuelve true si es lo mismo el string al revés
    let esPalindromo = soloLetras.join('') ===soloLetras.reverse().join('');
    
    document.getElementById("primeraLetraText").innerHTML += soloLetras[0];
    document.getElementById("mitadLetraText").innerHTML += soloLetras[Math.floor((soloLetras.length)/2)];
    if(esPalindromo) alert ("Es un palindromo!!")
    else alert("No es palindromo :(")
    
    
}