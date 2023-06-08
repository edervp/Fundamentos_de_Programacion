
function patronCiclos() {
    
    
    let stringFormula="";
    for (let i = 0; i < 11; i++) {
        let formula = ((i *( i+1))/2)+1;
        stringFormula += formula +", ";
    }
    console.log(stringFormula);
    
    document.getElementById("idResultado").innerHTML = "Resultado: "+ stringFormula;
    return stringFormula;
}
