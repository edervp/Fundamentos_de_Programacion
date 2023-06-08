
let jugador1 = prompt("Jugador 1 -> Ingresa T: tijeras, R: roca o P: papel");
let jugador2 = prompt("Jugador 2 -> Ingresa T: tijeras, R: roca o P: papel");
let ganador = false;
let accionGanador = "";
let opcionGanador ="";

if (jugador1 == jugador2) {
    alert("EMPATE!");
} else if (jugador1 === "T" && jugador2 === "P") {
    ganador = true;
} else if (jugador1 === "R" && jugador2 === "T") {
    ganador = true;
} else if (jugador1 === "P" && jugador2 === "R") {
    ganador = true;
}


if (ganador) opcionGanador = jugador1;
else opcionGanador = jugador2;


switch (opcionGanador) {
    case "T":
        accionGanador = " TIJERA corta PAPEL ";
        break;
    case "R":
        accionGanador = " ROCA rompe TIJERA ";
        break;
    case "P":
        accionGanador = " PAPEL atrapa ROCA "
        break;
    default:
        break;
}
if(ganador)alert(jugador1 +"-"+jugador2 +accionGanador+"gana el jugador 1");
else alert(jugador2 +"-"+jugador1 +accionGanador+"gana el jugador 2")


//T-R Roca  rompe tijeras gana el jugador 2